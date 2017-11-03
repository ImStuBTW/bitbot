// Basic express server to listen for Bitbucket webhooks.
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

// Used to push message to chat services.
var request = require('request');

// See config.js for server ports and chat webhook configuration.
var config = require('./config');

// Create Discord-formatted message and send it to the Discord webhook.
const discordPost = (message) => {
    let newMessage = {
        "username": config.username,
        "content": 'New push to ' + message.repo + ' by ' + message.username + '.',
        "embeds": [{
            title: message.hash,
            description: message.commit,
            url: message.link
        }]
    }

    request({
        url: config.discordEndpoint,
        method: 'POST',
        json: true,
        body: newMessage
    }, function(error, response, body) {
        console.log('Discord message sent.');
        //console.log(response);
    });
}

// Create Slack-formatted message and send it to the Slack webhook.
const slackPost = (message) => {
    let newMessage = {
        'username': config.username,
        'icon_emoji': ':card_file_box:',
        'text': 'New push to ' + message.repo + ' by ' + message.username + '.',
        'attachments': [{
    		"title": message.hash,
            "title_link": message.link,
            "text": message.commit
        }]
    }

    request({
        url: config.slackEndpoint,
        method: 'POST',
        json: true,
        body: newMessage
    }, function(error, response, body) {
        console.log('Slack message sent.');
        //console.log(response);
    });
}

// Figure out which endpoints are configured.
const post = (message) => {
    console.log('Posting message...');
    if(config.discordEndpoint) {
        discordPost(message);
    }
    if(config.slackEndpoint) {
        slackPost(message);
    }
}

// Debug to see if your server's config'd correctly.
/*app.get('/', function (req, res) {
    res.send('You\'re not supposed to be GET-ing here.');
});*/

// Listen for HTTP POST requests in whatever folder you run this app in.
app.post('/', function(req,res) {
    console.log('Bitbucket webhook recieved!');
    res.json({message: 'Message recieved by Bitbot.'});
    // console.log(req.body);
    // Turn the response into something easier to work with.
    let message = {
        'username': req.body.actor.username,
        'display_name': req.body.actor.display_name,
        'repo': req.body.repository.name,
        'hash': req.body.push.changes[0].commits[0].hash,
        'commit': req.body.push.changes[0].commits[0].message,
        'link': req.body.push.changes[0].links.html.href
    };
    console.log(message);
    post(message);
});

// Start listening on the configured port.
app.listen(config.port, function () {
  console.log(config.name + ' running on port ' + config.port + '.');
  if(config.discordEndpoint && config.slackEndpoint) {
    console.log('Running in Discord and Slack mode.');
  }
  else if(config.discordEndpoint) { console.log('Running in Discord mode.') }
  else if(config.slackEndpoint) { console.log('Running in Slack mode.') }
  else { console.log('Endpoints not configured.') }
});
