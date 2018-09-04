import { CommitStatus } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
export declare type BuildStatusUpdatedConfig = {
    commit_status: CommitStatus;
} & RepositoryEventConfig;
export declare class BuildStatusUpdated extends RepositoryEvent<BuildStatusUpdatedConfig> {
    constructor(config: BuildStatusUpdatedConfig);
    toMessageObject(): any;
    repositoryEventType(): RepositoryEventType;
}
