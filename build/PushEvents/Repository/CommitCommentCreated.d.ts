import { Comment } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
export declare type CommitCommentCreatedConfig = {
    comment: Comment;
    commit: {
        hash: string;
    };
} & RepositoryEventConfig;
export declare class CommitCommentCreated extends RepositoryEvent<CommitCommentCreatedConfig> {
    constructor(config: CommitCommentCreatedConfig);
    toMessageObject(): any;
    repositoryEventType(): RepositoryEventType;
}
