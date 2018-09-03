import { PushObject } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

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
        return null;
    }

    public repositoryEventType() {
        return RepositoryEventType.Push;
    }
}