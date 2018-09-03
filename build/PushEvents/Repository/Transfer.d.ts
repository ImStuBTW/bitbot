import { Owner } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
export declare type TransferEventConfig = {
    previous_owner: Owner;
} & RepositoryEventConfig;
export declare class Transfer extends RepositoryEvent<TransferEventConfig> {
    constructor(config: TransferEventConfig);
    toMessageObject(): any;
    repositoryEventType(): RepositoryEventType;
}
