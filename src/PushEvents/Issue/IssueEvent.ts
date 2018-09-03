import { Issue, Repository } from '../PayloadTypes';
import { EventConfig, Event, EventType } from '../Event';

export * from './CommentCreated';
export * from './Created';
export * from './Updated';

export enum IssueEventType {
    CommentCreated,
    Created,
    Updated
}

export type IssueEventConfig = {
    issue: Issue,
    repository: Repository
} & EventConfig;

export abstract class IssueEvent<T extends IssueEventConfig> extends Event<T> {
    constructor(config: T) {
        super(config);
    }

    get issue(): Issue {
        return Object.assign({}, this.config.issue);
    }

    get repository(): Repository {
        return Object.assign({}, this.config.repository);
    }

    type() {
        return EventType.Issue;
    }

    abstract issueEventType(): IssueEventType;
}