import { Owner, Comment } from '../PayloadTypes';
import { PullRequestEventConfig, PullReqestEvent, PullRequestEventType } from './PullRequestEvent';

export type CommentedCreatedConfig = {
    comment: Comment
} & PullRequestEventConfig;

export class CommentedCreated extends PullReqestEvent<CommentedCreatedConfig> {
    constructor(config: CommentedCreatedConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public pullRequestEventType() {
        return PullRequestEventType.CommentCreated;
    }
}