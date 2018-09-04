import { Event, EventConfig, EventType } from '../Event';
import { Issue, Repository } from '../PayloadTypes';
export * from './CommentCreated';
export * from './Created';
export * from './Updated';
export declare enum IssueEventType {
    CommentCreated = 0,
    Created = 1,
    Updated = 2
}
export declare type IssueEventConfig = {
    issue: Issue;
    repository: Repository;
} & EventConfig;
export declare abstract class IssueEvent<T extends IssueEventConfig> extends Event<T> {
    constructor(config: T);
    readonly issue: Issue;
    readonly repository: Repository;
    type(): EventType;
    abstract issueEventType(): IssueEventType;
}
