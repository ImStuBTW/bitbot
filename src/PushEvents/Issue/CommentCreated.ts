import { Comment } from '../PayloadTypes';
import { IssueEvent, IssueEventConfig, IssueEventType } from './IssueEvent';

export type CommentCreatedConfig = {
    comment: Comment
} & IssueEventConfig;

export class CommentCreated extends IssueEvent<CommentCreatedConfig> {
    constructor(config: CommentCreatedConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public issueEventType() {
        return IssueEventType.CommentCreated;
    }
}