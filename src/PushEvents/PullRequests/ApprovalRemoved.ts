import { Owner } from '../PayloadTypes';
import { PullRequestEventConfig, PullReqestEvent, PullRequestEventType } from './PullRequestEvent';

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

    }

    public pullRequestEventType() {
        return PullRequestEventType.ApprovalRemoved;
    }
}