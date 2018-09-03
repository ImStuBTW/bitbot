import { Owner, Comment } from '../PayloadTypes';
import { IssueEvent, IssueEventConfig, IssueEventType } from './IssueEvent';

export type UpdatedConfig = {
    comment: Comment
} & IssueEventConfig;

export class Updated extends IssueEvent<UpdatedConfig> {
    constructor(config: UpdatedConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public issueEventType() {
        return IssueEventType.Updated;
    }
}