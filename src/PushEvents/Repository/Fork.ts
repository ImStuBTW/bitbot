import { NotificationData } from '../Event';
import { Repository } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type ForkConfig = {
    fork: Repository
} & RepositoryEventConfig;

export class Fork extends RepositoryEvent<ForkConfig> {
    public static readonly ACTION = 'Repository Forked';

    constructor(config: ForkConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.full_name,
            url: this.config.fork.links.html.href,
            action: Fork.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: this.config.fork.full_name,
            description: this.config.fork.owner
        }
    }


    public repositoryEventType() {
        return RepositoryEventType.Fork;
    }
}