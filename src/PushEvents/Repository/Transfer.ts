import { Owner } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type TransferEventConfig = {
    previous_owner: Owner
} & RepositoryEventConfig;

export class Transfer extends RepositoryEvent<TransferEventConfig> {
    constructor(config: TransferEventConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public repositoryEventType() {
        return RepositoryEventType.Transfer;
    }
}