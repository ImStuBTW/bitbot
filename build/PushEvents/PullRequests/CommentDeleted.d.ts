import { Comment } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';
export declare type CommentDeletedConfig = {
    comment: Comment;
} & PullRequestEventConfig;
export declare class CommentDeleted extends PullReqestEvent<CommentDeletedConfig> {
    constructor(config: CommentDeletedConfig);
    toMessageObject(): any;
    pullRequestEventType(): PullRequestEventType;
}
