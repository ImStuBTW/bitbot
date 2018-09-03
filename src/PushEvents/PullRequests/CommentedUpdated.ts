import { PullRequestEventConfig, PullReqestEvent, PullRequestEventType } from './PullRequestEvent';
import { Comment } from '../PayloadTypes';

export type CommentUpdatedConfig = {
    comment: Comment
} & PullRequestEventConfig;

export class CommentUpdated extends PullReqestEvent<CommentUpdatedConfig> {
    constructor(config: CommentUpdatedConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public pullRequestEventType() {
        return PullRequestEventType.CommentUpdated;
    }
}