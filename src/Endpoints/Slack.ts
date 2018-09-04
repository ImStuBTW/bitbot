import { NotificationData } from '../PushEvents/Event';
import { Endpoint } from './Endpoint';

// const slackPost = (message) => {
//     const newMessage = {
//         'username': config.username,
//         'icon_emoji': ':card_file_box:',
//         'text': 'New push to ' + message.repo + ' by ' + message.username + '.',
//         'attachments': [{
//             'title': message.hash,
//             'title_link': message.link,
//             'text': message.commit
//         }]
//     }

//     request({
//         url: config.slackEndpoint,
//         method: 'POST',
//         json: true,
//         body: newMessage
//     }, (error, response, body) => {
//         console.log('Slack message sent.');
//         // console.log(response);
//     });
// }


export class SlackEndpoint extends Endpoint {
    constructor(username: string, endpoint: string) {
        super(username, endpoint);
    }

    public sendNotification(data: NotificationData) {
        return Promise.resolve();
    }
}