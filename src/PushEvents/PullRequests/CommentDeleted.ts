import { NotificationData } from '../Event';
import { Comment } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export type CommentDeletedConfig = {
    comment: Comment
} & PullRequestEventConfig;

export class CommentDeleted extends PullReqestEvent<CommentDeletedConfig> {
    public static readonly ACTION = 'Pull Request Commend Deleted';

    constructor(config: CommentDeletedConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.pullrequest.links.html.href,
            action: CommentDeleted.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: this.config.pullrequest.title,
            description: this.config.comment.content.raw
        }
    }

    public pullRequestEventType() {
        return PullRequestEventType.CommentDeleted;
    }
}