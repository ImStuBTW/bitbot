import { NotificationData } from '../Event';
import { Owner } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export type ApprovalConfig = {
    approval: {
        date: string,
        user: Owner
    }
} & PullRequestEventConfig;

export class Approved extends PullReqestEvent<ApprovalConfig> {
    public static readonly ACTION = 'Pull Request Approved';

    constructor(config: ApprovalConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.pullrequest.links.html.href,
            action: Approved.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: this.config.pullrequest.title,
            description: this.config.approval.user.username
        }
    }


    public pullRequestEventType() {
        return PullRequestEventType.Approved;
    }
}