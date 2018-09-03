import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
import { CommitStatus } from '../PayloadTypes';

export type BuildStatusUpdatedConfig = {
    commit_status: CommitStatus
} & RepositoryEventConfig;

export class BuildStatusUpdated extends RepositoryEvent<BuildStatusUpdatedConfig> {
    constructor(config: BuildStatusUpdatedConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public repositoryEventType() {
        return RepositoryEventType.BuildStatusUpdated;
    }
}