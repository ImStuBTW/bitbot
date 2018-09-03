import { LinkMap } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type Change<T> = {
    new: T,
    old: T
}

export type Changes = {
    name?: Change<string>,
    website?: Change<string>,
    language?: Change<string>,
    links?: Change<LinkMap>,
    description?: Change<string>,
    full_name?: Change<string>
}

export type UpdatedConfig = {
    changes: Changes
} & RepositoryEventConfig;

export class Updated extends RepositoryEvent<UpdatedConfig> {
    constructor(config: UpdatedConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public repositoryEventType() {
        return RepositoryEventType.Updated;
    }
}