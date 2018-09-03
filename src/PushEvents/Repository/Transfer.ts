import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
import { Owner } from '../PayloadTypes';

export type TransferEventConfig = {
    previous_owner: Owner
} & RepositoryEventConfig;

export class Transfer extends RepositoryEvent<TransferEventConfig> {
    constructor(config: TransferEventConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public repositoryEventType() {
        return RepositoryEventType.Transfer;
    }
}