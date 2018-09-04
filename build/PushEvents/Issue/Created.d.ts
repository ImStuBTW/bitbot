import { IssueEvent, IssueEventConfig, IssueEventType } from './IssueEvent';
export declare class Created extends IssueEvent<IssueEventConfig> {
    constructor(config: IssueEventConfig);
    toMessageObject(): any;
    issueEventType(): IssueEventType;
}
