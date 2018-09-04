import { PushObject } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
export declare type PushConfig = {
    push: {
        changes: PushObject[];
    };
} & RepositoryEventConfig;
export declare class Push extends RepositoryEvent<PushConfig> {
    constructor(config: PushConfig);
    toMessageObject(): any;
    repositoryEventType(): RepositoryEventType;
}
