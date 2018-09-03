import { IssueEvent, IssueEventConfig, IssueEventType } from './IssueEvent';

export class Created extends IssueEvent<IssueEventConfig> {
    constructor(config: IssueEventConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public issueEventType() {
        return IssueEventType.Created;
    }
}