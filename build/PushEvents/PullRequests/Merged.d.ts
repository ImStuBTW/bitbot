import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';
export declare class Merged extends PullReqestEvent<PullRequestEventConfig> {
    constructor(config: PullRequestEventConfig);
    toMessageObject(): any;
    pullRequestEventType(): PullRequestEventType;
}
