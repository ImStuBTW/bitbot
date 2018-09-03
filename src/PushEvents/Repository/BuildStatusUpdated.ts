import { CommitStatus } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type BuildStatusUpdatedConfig = {
    commit_status: CommitStatus
} & RepositoryEventConfig;

export class BuildStatusUpdated extends RepositoryEvent<BuildStatusUpdatedConfig> {
    constructor(config: BuildStatusUpdatedConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public repositoryEventType() {
        return RepositoryEventType.BuildStatusUpdated;
    }
}