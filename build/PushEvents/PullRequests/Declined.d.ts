import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';
export declare class Declined extends PullReqestEvent<PullRequestEventConfig> {
    constructor(config: PullRequestEventConfig);
    toMessageObject(): any;
    pullRequestEventType(): PullRequestEventType;
}
