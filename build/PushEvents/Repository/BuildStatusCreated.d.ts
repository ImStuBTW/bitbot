import { CommitStatus } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
export declare type BuildStatusCreatedConfig = {
    commit_status: CommitStatus;
} & RepositoryEventConfig;
export declare class BuildStatusCreated extends RepositoryEvent<BuildStatusCreatedConfig> {
    constructor(config: BuildStatusCreatedConfig);
    toMessageObject(): any;
    repositoryEventType(): RepositoryEventType;
}
