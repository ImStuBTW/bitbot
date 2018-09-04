import { Comment } from '../PayloadTypes';
import { IssueEvent, IssueEventConfig, IssueEventType } from './IssueEvent';
export declare type UpdatedConfig = {
    comment: Comment;
} & IssueEventConfig;
export declare class Updated extends IssueEvent<UpdatedConfig> {
    constructor(config: UpdatedConfig);
    toMessageObject(): any;
    issueEventType(): IssueEventType;
}
