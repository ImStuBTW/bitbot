import { PullRequest, Repository } from '../PayloadTypes';
import { EventConfig, Event, EventType } from '../Event';

export * from './ApprovalRemoved';
export * from './Approved';
export * from './CommentDeleted';
export * from './CommentedCreated';
export * from './CommentedUpdated';
export * from './Created';
export * from './Declined';
export * from './Merged';
export * from './Updated';

export enum PullRequestEventType {
    Created,
    Updated,
    Approved,
    ApprovalRemoved,
    Merged,
    Declined,
    CommentCreated,
    CommentUpdated,
    CommentDeleted
}

export type PullRequestEventConfig = {
    pullrequest: PullRequest,
    repository: Repository
} & EventConfig;

export abstract class PullReqestEvent<T extends PullRequestEventConfig> extends Event<T> {
    constructor(config: T) {
        super(config);
    }

    get pullrequest(): PullRequest {
        return Object.assign({}, this.config.pullrequest);
    }

    get repository(): Repository {
        return Object.assign({}, this.config.repository);
    }

    type() {
        return EventType.Issue;
    }

    abstract pullRequestEventType(): PullRequestEventType;
}