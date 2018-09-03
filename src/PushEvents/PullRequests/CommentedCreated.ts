import { Comment } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export type CommentedCreatedConfig = {
    comment: Comment
} & PullRequestEventConfig;

export class CommentedCreated extends PullReqestEvent<CommentedCreatedConfig> {
    constructor(config: CommentedCreatedConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public pullRequestEventType() {
        return PullRequestEventType.CommentCreated;
    }
}