import { Owner } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export type ApprovalRemovedConfig = {
    approval: {
        date: string,
        user: Owner
    }
} & PullRequestEventConfig;

export class ApprovalRemoved extends PullReqestEvent<ApprovalRemovedConfig> {
    constructor(config: ApprovalRemovedConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public pullRequestEventType() {
        return PullRequestEventType.ApprovalRemoved;
    }
}