import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export class Declined extends PullReqestEvent<PullRequestEventConfig> {
    constructor(config: PullRequestEventConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public pullRequestEventType() {
        return PullRequestEventType.Declined;
    }
}