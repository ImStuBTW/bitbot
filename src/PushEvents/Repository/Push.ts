import { NotificationData } from '../Event';
import { PushObject } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type PushConfig = {
    push: {
        changes: PushObject[]
    }
} & RepositoryEventConfig;

export class Push extends RepositoryEvent<PushConfig> {
    public static readonly ACTION = 'Commit Pushed';

    constructor(config: PushConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.full_name,
            url: this.config.push.changes[0].links.html.href,
            action: Push.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: `${this.config.push.changes.length} commits pushed`
        }
    }

    public repositoryEventType() {
        return RepositoryEventType.Push;
    }
}