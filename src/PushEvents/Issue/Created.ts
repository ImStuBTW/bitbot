import { NotificationData } from '../Event';
import { IssueEvent, IssueEventConfig, IssueEventType } from './IssueEvent';

export class Created extends IssueEvent<IssueEventConfig> {
    public static readonly ACTION = 'Issue Created';

    constructor(config: IssueEventConfig) {
        super(config);
    }

    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.issue.links.html.href,
            action: Created.ACTION,
            user: {
                name: this.config.owner.display_name,
                avatar: this.config.owner.links.avatar.href,
                url: this.config.owner.links.html.href
            },
            subtitle: this.config.issue.title,
            description: this.config.issue.content.raw
        }
    }


    public issueEventType() {
        return IssueEventType.Created;
    }
}