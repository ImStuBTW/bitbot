import { Owner, LinkMap, Repository } from '../PayloadTypes';
import { EventConfig, Event, EventType } from '../Event';

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

    type() {
        return EventType.Repository;
    }

    get repository(): Repository {
        return Object.assign({}, this.config.repository);
    }

    abstract repositoryEventType(): RepositoryEventType;
}