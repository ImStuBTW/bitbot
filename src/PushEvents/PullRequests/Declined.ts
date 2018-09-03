import { NotificationData } from '../Event';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export class Declined extends PullReqestEvent<PullRequestEventConfig> {
    public static readonly ACTION = 'Pull Request Declined';

    constructor(config: PullRequestEventConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.pullrequest.links.html.href,
            action: Declined.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: this.config.pullrequest.title,
            description: this.config.owner.username
        }
    }


    public pullRequestEventType() {
        return PullRequestEventType.Declined;
    }
}