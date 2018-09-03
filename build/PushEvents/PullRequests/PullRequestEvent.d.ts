import { Event, EventConfig, EventType } from '../Event';
import { PullRequest, Repository } from '../PayloadTypes';
export * from './ApprovalRemoved';
export * from './Approved';
export * from './CommentDeleted';
export * from './CommentedCreated';
export * from './CommentedUpdated';
export * from './Created';
export * from './Declined';
export * from './Merged';
export * from './Updated';
export declare enum PullRequestEventType {
    Created = 0,
    Updated = 1,
    Approved = 2,
    ApprovalRemoved = 3,
    Merged = 4,
    Declined = 5,
    CommentCreated = 6,
    CommentUpdated = 7,
    CommentDeleted = 8
}
export declare type PullRequestEventConfig = {
    pullrequest: PullRequest;
    repository: Repository;
} & EventConfig;
export declare abstract class PullReqestEvent<T extends PullRequestEventConfig> extends Event<T> {
    constructor(config: T);
    readonly pullrequest: PullRequest;
    readonly repository: Repository;
    type(): EventType;
    abstract pullRequestEventType(): PullRequestEventType;
}
