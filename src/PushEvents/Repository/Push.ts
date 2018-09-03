import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
import { Owner, LinkMap, PushObject } from '../PayloadTypes';

export type PushConfig = {
    push: {
        changes: PushObject[]
    }
} & RepositoryEventConfig;

export class Push extends RepositoryEvent<PushConfig> {
    constructor(config: PushConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public repositoryEventType() {
        return RepositoryEventType.Push;
    }
}