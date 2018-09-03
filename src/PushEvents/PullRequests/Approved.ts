import { Owner } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

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
        return null;
    }

    public pullRequestEventType() {
        return PullRequestEventType.Approved;
    }
}