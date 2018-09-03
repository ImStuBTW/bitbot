import { Comment } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type CommitCommentCreatedConfig = {
    comment: Comment,
    commit: { hash: string }
} & RepositoryEventConfig;

export class CommitCommentCreated extends RepositoryEvent<CommitCommentCreatedConfig> {
    constructor(config: CommitCommentCreatedConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public repositoryEventType() {
        return RepositoryEventType.CommitCreated;
    }
}