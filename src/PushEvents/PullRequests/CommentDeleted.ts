import { Comment } from '../PayloadTypes';
import { PullRequestEventConfig, PullReqestEvent, PullRequestEventType } from './PullRequestEvent';

export type CommentDeletedConfig = {
    comment: Comment
} & PullRequestEventConfig;

export class CommentDeleted extends PullReqestEvent<CommentDeletedConfig> {
    constructor(config: CommentDeletedConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public pullRequestEventType() {
        return PullRequestEventType.CommentDeleted;
    }
}