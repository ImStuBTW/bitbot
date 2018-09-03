import { NotificationData } from '../PushEvents/Event';

export abstract class Endpoint {
    protected endpoint: string;
    protected username: string;

    constructor(username: string, endpointUrl: string) {
        this.endpoint = endpointUrl;
        this.username = username;
    }

    public abstract sendNotification(data: NotificationData);
}