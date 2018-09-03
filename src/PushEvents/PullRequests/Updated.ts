import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';

export class Updated extends PullReqestEvent<PullRequestEventConfig> {
    constructor(config: PullRequestEventConfig) {
        super(config);
    }

    public toMessageObject() {
        return null;
    }

    public pullRequestEventType() {
        return PullRequestEventType.Updated;
    }
}