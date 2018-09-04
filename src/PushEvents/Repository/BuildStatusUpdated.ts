import { NotificationData } from '../Event';
import { CommitStatus } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type BuildStatusUpdatedConfig = {
    commit_status: CommitStatus
} & RepositoryEventConfig;

export class BuildStatusUpdated extends RepositoryEvent<BuildStatusUpdatedConfig> {
    public static readonly ACTION = 'Commit Build Status Change';


    constructor(config: BuildStatusUpdatedConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.commit_status.url,
            action: BuildStatusUpdated.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: this.config.commit_status.description,
            description: this.config.commit_status.state
        }
    }


    public repositoryEventType() {
        return RepositoryEventType.BuildStatusUpdated;
    }
}