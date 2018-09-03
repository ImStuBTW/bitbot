import { Owner } from '../PayloadTypes';
import { PullReqestEvent, PullRequestEventConfig, PullRequestEventType } from './PullRequestEvent';
export declare type ApprovalRemovedConfig = {
    approval: {
        date: string;
        user: Owner;
    };
} & PullRequestEventConfig;
export declare class ApprovalRemoved extends PullReqestEvent<ApprovalRemovedConfig> {
    constructor(config: ApprovalRemovedConfig);
    toMessageObject(): any;
    pullRequestEventType(): PullRequestEventType;
}
