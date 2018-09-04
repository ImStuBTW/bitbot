import { Comment } from '../PayloadTypes';
import { IssueEvent, IssueEventConfig, IssueEventType } from './IssueEvent';
export declare type CommentCreatedConfig = {
    comment: Comment;
} & IssueEventConfig;
export declare class CommentCreated extends IssueEvent<CommentCreatedConfig> {
    constructor(config: CommentCreatedConfig);
    toMessageObject(): any;
    issueEventType(): IssueEventType;
}
