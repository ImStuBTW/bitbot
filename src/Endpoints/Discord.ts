import * as request from 'request';
import { NotificationData } from '../PushEvents/Event';
import { Endpoint } from './Endpoint';

// const discordPost = (message) => {
//     const newMessage = {
//         'content': 'New push to ' + message.repo + ' by ' + message.username + '.',
//         'username': config.username,
//         'embeds': [{
//             title: message.hash,
//             description: message.commit,
//             url: message.link
//         }]
//     }

//     request({
//         url: config.discordEndpoint,
//         method: 'POST',
//         json: true,
//         body: newMessage
//     }, (error, response, body) => {
//         console.log('Discord message sent.');
//         // console.log(response);
//     });
// }

export class DiscordEndpoint extends Endpoint {
    constructor(username: string, endpoint: string) {
        super(username, endpoint);
    }

    public sendNotification(data: NotificationData) {
        const message = {
            username: this.username,
            embed: [this.dataToEmbed(data)]
        }

        return new Promise((res, rej) => {

            request({
                url: this.endpoint,
                method: 'POST',
                json: true,
                body: message
            }, (error, response, body) => {
                if (error != null) {
                    rej(error);
                } else {
                    res();
                }
            });
        });
    }

    protected dataToEmbed(data: NotificationData) {
        const embed: any = {
            title: data.action,
            type: 'rich',
            description: data.user.name,

            url: data.url,
            author: {
                name: data.repository
            }
        }

        if (data.user.avatar != null) {
            embed.author.icon_url = data.user.avatar
        }

        if (data.user.url != null) {
            embed.author.url = data.user.url;
        }

        if (data.subtitle != null) {
            embed.fields = [
                {
                    name: data.subtitle
                }
            ]
        }

        if (data.description != null) {
            if (embed.fields == null) {
                embed.fields = [{}];
            }

            embed.fields[0].value = data.description;
        }

        if (data.additionalinfo != null) {
            embed.footer = {
                text: data.additionalinfo
            }
        }

        return embed;
    }
}