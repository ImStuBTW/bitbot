import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
import { Comment } from '../PayloadTypes';

export type CommitCommentCreatedConfig = {
    comment: Comment,
    commit: { hash: string }
} & RepositoryEventConfig;

export class CommitCommentCreated extends RepositoryEvent<CommitCommentCreatedConfig> {
    constructor(config: CommitCommentCreatedConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public repositoryEventType() {
        return RepositoryEventType.CommitCreated;
    }
}