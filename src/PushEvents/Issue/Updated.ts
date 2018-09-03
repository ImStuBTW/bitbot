import { NotificationData } from '../Event';
import { Comment } from '../PayloadTypes';
import { IssueEvent, IssueEventConfig, IssueEventType } from './IssueEvent';

export type UpdatedConfig = {
    comment: Comment
} & IssueEventConfig;

export class Updated extends IssueEvent<UpdatedConfig> {
    public static readonly ACTION = 'Issue Updated';

    constructor(config: UpdatedConfig) {
        super(config);
    }

    // THIS NEEDS TO BE CHANGED TO SHOW CHANGES
    public toMessageObject(): NotificationData {
        return {
            repository: this.config.repository.name,
            url: this.config.issue.links.html.href,
            action: Updated.ACTION,
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
        return IssueEventType.Updated;
    }
}