import { Event, EventConfig, EventType } from '../Event';
import { LinkMap, Owner, Repository } from '../PayloadTypes';

export * from './BuildStatusCreated';
export * from './BuildStatusUpdated';
export * from './CommitCommentCreated';
export * from './Fork';
export * from './Push';
export * from './Transfer';
export * from './Updated';

export enum RepositoryEventType {
    Push,
    Fork,
    Transfer,
    Updated,
    CommitCreated,
    BuildStatusCreated,
    BuildStatusUpdated
}

export type RepositoryEventObject = {
    actor: Owner,
    repository: Repository,
    push?: any,
    fork?: any,
    changes?: any,
    previous_owner?: Owner,
    comment?: any,
    commit?: any,
    commit_status?: any
}

export type RepositoryEventConfig = {
    repository: Repository
} & EventConfig;

export abstract class RepositoryEvent<T extends RepositoryEventConfig> extends Event<T> {
    constructor(config: T) {
        super(config);
    }

    public type() {
        return EventType.Repository;
    }

    get repository(): Repository {
        return Object.assign({}, this.config.repository);
    }

    public abstract repositoryEventType(): RepositoryEventType;
}