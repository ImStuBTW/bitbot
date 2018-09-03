import { NotificationData } from '../Event';
import { LinkMap } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type Change<T> = {
    new: T,
    old: T
}

export type Changes = {
    name?: Change<string>,
    website?: Change<string>,
    language?: Change<string>,
    links?: Change<LinkMap>,
    description?: Change<string>,
    full_name?: Change<string>
}

export type UpdatedConfig = {
    changes: Changes
} & RepositoryEventConfig;

export class Updated extends RepositoryEvent<UpdatedConfig> {
    public static readonly ACTION = 'Repository Updated';

    constructor(config: UpdatedConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.full_name,
            url: this.config.repository.links.html.href,
            action: Updated.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            }
        }
    }

    public repositoryEventType() {
        return RepositoryEventType.Updated;
    }
}