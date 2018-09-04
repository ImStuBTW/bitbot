import { Comment } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';
export declare type CommentedCreatedConfig = {
    comment: Comment;
} & PullRequestEventConfig;
export declare class CommentedCreated extends PullReqestEvent<CommentedCreatedConfig> {
    constructor(config: CommentedCreatedConfig);
    toMessageObject(): any;
    pullRequestEventType(): PullRequestEventType;
}
