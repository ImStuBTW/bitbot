import { NotificationData } from '../Event';
import { Comment } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export type CommentedCreatedConfig = {
    comment: Comment
} & PullRequestEventConfig;

export class CommentCreated extends PullReqestEvent<CommentedCreatedConfig> {
    public static readonly ACTION = 'Pull Request Comment Created';

    constructor(config: CommentedCreatedConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.pullrequest.links.html.href,
            action: CommentCreated.ACTION,
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
        return PullRequestEventType.CommentCreated;
    }
}