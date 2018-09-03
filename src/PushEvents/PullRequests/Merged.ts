import { PullRequestEventConfig, PullReqestEvent, PullRequestEventType } from './PullRequestEvent';

export class Merged extends PullReqestEvent<PullRequestEventConfig> {
    constructor(config: PullRequestEventConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public pullRequestEventType() {
        return PullRequestEventType.Merged;
    }
}