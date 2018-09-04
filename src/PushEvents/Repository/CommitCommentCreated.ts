import { NotificationData } from '../Event';
import { Comment } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type CommitCommentCreatedConfig = {
    comment: Comment,
    commit: { hash: string }
} & RepositoryEventConfig;

export class CommitCommentCreated extends RepositoryEvent<CommitCommentCreatedConfig> {
    public static readonly ACTION = 'Commit Comment Created';

    constructor(config: CommitCommentCreatedConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.comment.links.html.href,
            action: CommitCommentCreated.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: this.config.commit.hash,
            description: this.config.comment.content.raw
        }
    }

    public repositoryEventType() {
        return RepositoryEventType.CommitCreated;
    }
}