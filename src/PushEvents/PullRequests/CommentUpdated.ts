import { NotificationData } from '../Event';
import { Comment } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export type CommentUpdatedConfig = {
    comment: Comment
} & PullRequestEventConfig;

export class CommentUpdated extends PullReqestEvent<CommentUpdatedConfig> {
    public static readonly ACTION = 'Pull Request Comment Updated';

    constructor(config: CommentUpdatedConfig) {
        super(config);
    }
    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.pullrequest.links.html.href,
            action: CommentUpdated.ACTION,
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
        return PullRequestEventType.CommentUpdated;
    }
}