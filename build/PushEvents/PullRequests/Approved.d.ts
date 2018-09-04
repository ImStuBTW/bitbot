import { Owner } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';
export declare type ApprovalConfig = {
    approval: {
        date: string;
        user: Owner;
    };
} & PullRequestEventConfig;
export declare class Approved extends PullReqestEvent<PullRequestEventConfig> {
    constructor(config: PullRequestEventConfig);
    toMessageObject(): any;
    pullRequestEventType(): PullRequestEventType;
}
