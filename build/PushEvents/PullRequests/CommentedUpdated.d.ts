import { Comment } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';
export declare type CommentUpdatedConfig = {
    comment: Comment;
} & PullRequestEventConfig;
export declare class CommentUpdated extends PullReqestEvent<CommentUpdatedConfig> {
    constructor(config: CommentUpdatedConfig);
    toMessageObject(): any;
    pullRequestEventType(): PullRequestEventType;
}
