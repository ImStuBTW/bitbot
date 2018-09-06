"use strict";

var bodyParser = require("body-parser");
var express = require("express");
var app = express();
app.use(bodyParser.json());

var request = require("request");
var config = require("./config");

// List the different types of POST messages.

const pushPost = (message) => {
  let newMessage = {
    "username": config.username,
    "embeds": [{
      "title": message.hash,
      "description": message.commit,
      "url": message.commitLink,
      "color": 26080,
      "footer": {
        "text": "Push from BitBucket."
      },
      "thumbnail": {
        "url": message.user_thumbnail
      },
      "fields": [{
          "name": "Repository",
          "value": message.repo,
          "inline": true
        },
        {
          "name": "Branch",
          "value": message.branch,
          "inline": true
        }
      ]
    }]
  };

  request({
    url: "https://discordapp.com/api/webhooks/" + message.path,
    method: "POST",
    json: true,
    body: newMessage
  });
};

const prPost = (message) => {
  let title = "";

  if (message.state === "MERGED") {
    title = "PR Completed: ";
  } else {
    title = "New PR: ";
  }

  let newMessage = {
    "username": config.username,
    "embeds": [{
      "title": title + message.title,
      "description": message.pr,
      "url": message.prLink,
      "color": 26080,
      "footer": {
        "text": "Push from BitBucket."
      },
      "thumbnail": {
        "url": message.user_thumbnail
      },
      "fields": [{
          "name": "From Branch",
          "value": message.source,
          "inline": true
        },
        {
          "name": "To Branch",
          "value": message.destination,
          "inline": true
        },
        {
          "name": "State",
          "value": message.state
        }
      ]
    }]
  };

  request({
    url: "https://discordapp.com/api/webhooks/" + message.path,
    method: "POST",
    json: true,
    body: newMessage
  });
}

// Listen for HTTP POST requests.

app.get("/", function (req, res) {
  res.send("Integrator for BitBot is active at this URL.");
});

app.post("/:part0/:part1", function (req, res) {
  res.json({
    message: "Message recieved by BitBot."
  });

  // Create a mapping of the response based on information in every message.

  let message = {
    // Take URL part for Discord URL.

    "path": req.params["part0"] + "/" + req.params["part1"],

    // Get some information about the actor.

    "username": req.body.actor.username,
    "user_profile": req.body.actor.links.html.href,
    "user_thumbnail": req.body.actor.links.avatar.href,

    // Get information about the repository.

    "repo": req.body.repository.full_name,
  };

  // Add additional details depending on the type of message.

  if (typeof req.body.push !== "undefined") {
    for (let i = 0; i < req.body.push.changes[0].commits.length; i++) {
      message.hash = req.body.push.changes[0].commits[i].hash;
      message.commit = req.body.push.changes[0].commits[i].message;
      message.commitLink = req.body.push.changes[0].links.html.href;
      message.branch = req.body.push.changes[0].old.name;

      pushPost(message);
    }
  } else if (typeof req.body.pullrequest !== "undefined") {
    message.pr = req.body.pullrequest.description;
    message.prLink = req.body.pullrequest.links.html.href;
    message.title = req.body.pullrequest.title;
    message.destination = req.body.pullrequest.destination.branch.name;
    message.source = req.body.pullrequest.source.branch.name;
    message.state = req.body.pullrequest.state;

    prPost(message);
  }
});

// Start listening.

app.listen(config.port, function () {
  console.log(config.username + " running on port " + config.port + ".");
});
