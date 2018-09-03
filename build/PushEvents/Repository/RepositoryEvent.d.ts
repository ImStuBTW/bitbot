import { Event, EventConfig, EventType } from '../Event';
import { Owner, Repository } from '../PayloadTypes';
export * from './BuildStatusCreated';
export * from './BuildStatusUpdated';
export * from './CommitCommentCreated';
export * from './Fork';
export * from './Push';
export * from './Transfer';
export * from './Updated';
export declare enum RepositoryEventType {
    Push = 0,
    Fork = 1,
    Transfer = 2,
    Updated = 3,
    CommitCreated = 4,
    BuildStatusCreated = 5,
    BuildStatusUpdated = 6
}
export declare type RepositoryEventObject = {
    actor: Owner;
    repository: Repository;
    push?: any;
    fork?: any;
    changes?: any;
    previous_owner?: Owner;
    comment?: any;
    commit?: any;
    commit_status?: any;
};
export declare type RepositoryEventConfig = {
    repository: Repository;
} & EventConfig;
export declare abstract class RepositoryEvent<T extends RepositoryEventConfig> extends Event<T> {
    constructor(config: T);
    type(): EventType;
    readonly repository: Repository;
    abstract repositoryEventType(): RepositoryEventType;
}
