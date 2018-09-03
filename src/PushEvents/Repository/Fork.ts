import { Repository } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type ForkConfig = {
    fork: Repository
} & RepositoryEventConfig;

export class Fork extends RepositoryEvent<ForkConfig> {
    constructor(config: ForkConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public repositoryEventType() {
        return RepositoryEventType.Fork;
    }
}