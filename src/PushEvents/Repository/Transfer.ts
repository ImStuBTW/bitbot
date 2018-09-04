import { NotificationData } from '../Event';
import { Owner } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';

export type TransferEventConfig = {
    previous_owner: Owner
} & RepositoryEventConfig;

export class Transfer extends RepositoryEvent<TransferEventConfig> {
    public static readonly ACTION = 'Repository Transfered';

    constructor(config: TransferEventConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.full_name,
            url: this.config.repository.links.html.href,
            action: Transfer.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: `${this.config.previous_owner.display_name} → ${this.config.owner.display_name}`
        }
    }

    public repositoryEventType() {
        return RepositoryEventType.Transfer;
    }
}