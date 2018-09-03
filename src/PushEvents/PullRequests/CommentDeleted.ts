import { Comment } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export type CommentDeletedConfig = {
    comment: Comment
} & PullRequestEventConfig;

export class CommentDeleted extends PullReqestEvent<CommentDeletedConfig> {
    constructor(config: CommentDeletedConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public pullRequestEventType() {
        return PullRequestEventType.CommentDeleted;
    }
}