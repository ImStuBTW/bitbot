import { Comment } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export type CommentUpdatedConfig = {
    comment: Comment
} & PullRequestEventConfig;

export class CommentUpdated extends PullReqestEvent<CommentUpdatedConfig> {
    constructor(config: CommentUpdatedConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public pullRequestEventType() {
        return PullRequestEventType.CommentUpdated;
    }
}