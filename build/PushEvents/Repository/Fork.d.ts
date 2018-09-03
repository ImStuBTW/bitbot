import { Repository } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
export declare type ForkConfig = {
    fork: Repository;
} & RepositoryEventConfig;
export declare class Fork extends RepositoryEvent<ForkConfig> {
    constructor(config: ForkConfig);
    toMessageObject(): any;
    repositoryEventType(): RepositoryEventType;
}
