import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
import { Repository } from '../PayloadTypes';

export type ForkConfig = {
    fork: Repository
} & RepositoryEventConfig;

export class Fork extends RepositoryEvent<ForkConfig> {
    constructor(config: ForkConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public repositoryEventType() {
        return RepositoryEventType.Fork;
    }
}