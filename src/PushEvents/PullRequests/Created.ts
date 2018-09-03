import { Owner, Comment } from '../PayloadTypes';
import { PullRequestEventConfig, PullReqestEvent, PullRequestEventType } from './PullRequestEvent';

export class Created extends PullReqestEvent<PullRequestEventConfig> {
    constructor(config: PullRequestEventConfig) {
        super(config);
    }

    public toMessageObject() {

    }

    public pullRequestEventType() {
        return PullRequestEventType.Created;
    }
}