import { NotificationData } from '../Event';
import { Comment } from '../PayloadTypes';
import { IssueEvent, IssueEventConfig, IssueEventType } from './IssueEvent';

export type CommentCreatedConfig = {
    comment: Comment
} & IssueEventConfig;

export class CommentCreated extends IssueEvent<CommentCreatedConfig> {
    public static readonly ACTION = 'New Issue Comment';

    constructor(config: CommentCreatedConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.comment.links.html.href,
            action: CommentCreated.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: this.config.issue.title,
            description: this.config.comment.content.raw
        }
    }

    public issueEventType() {
        return IssueEventType.CommentCreated;
    }
}