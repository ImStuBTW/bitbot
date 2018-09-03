import { CommitStatus } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type BuildStatusCreatedConfig = {
    commit_status: CommitStatus
} & RepositoryEventConfig;

export class BuildStatusCreated extends RepositoryEvent<BuildStatusCreatedConfig> {
    constructor(config: BuildStatusCreatedConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public repositoryEventType() {
        return RepositoryEventType.BuildStatusCreated;
    }
}