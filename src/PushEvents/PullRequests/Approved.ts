import { Owner, Comment } from '../PayloadTypes';
import { PullRequestEventConfig, PullReqestEvent, PullRequestEventType } from './PullRequestEvent';

export type ApprovalConfig = {
    approval: {
        date: string,
        user: Owner
    }
} & PullRequestEventConfig;

export class Approved extends PullReqestEvent<PullRequestEventConfig> {
    constructor(config: PullRequestEventConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public pullRequestEventType() {
        return PullRequestEventType.Approved;
    }
}