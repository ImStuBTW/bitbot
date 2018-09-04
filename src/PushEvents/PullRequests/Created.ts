import { NotificationData } from '../Event';
import { Comment, Owner } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export class Created extends PullReqestEvent<PullRequestEventConfig> {
    public static readonly ACTION = 'Pull Request Created';

    constructor(config: PullRequestEventConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.pullrequest.links.html.href,
            action: Created.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: `${this.config.pullrequest.source.branch} → ${this.config.pullrequest.destination.branch}`,
            description: this.config.pullrequest.title,
            additionalinfo: this.config.pullrequest.description
        }
    }


    public pullRequestEventType() {
        return PullRequestEventType.Created;
    }
}