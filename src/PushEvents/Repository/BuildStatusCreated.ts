import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
import { CommitStatus } from '../PayloadTypes';

export type BuildStatusCreatedConfig = {
    commit_status: CommitStatus
} & RepositoryEventConfig;

export class BuildStatusCreated extends RepositoryEvent<BuildStatusCreatedConfig> {
    constructor(config: BuildStatusCreatedConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public repositoryEventType() {
        return RepositoryEventType.BuildStatusCreated;
    }
}