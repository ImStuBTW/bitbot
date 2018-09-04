import * as Issue from './Issue/IssueEvent';
import { Owner } from './PayloadTypes';
import * as PullReqest from './PullRequests/PullRequestEvent';
import * as Repository from './Repository/RepositoryEvent';
export declare type EventConfig = {
    owner: Owner;
};
export declare enum EventType {
    Repository = 0,
    PullRequest = 1,
    Issue = 2
}
export declare abstract class Event<T extends EventConfig> {
    protected config: T;
    constructor(config: T);
    readonly actor: Owner;
    abstract toMessageObject(): any;
    abstract type(): EventType;
}
export declare namespace Event {
    const KeyMap: Readonly<{
        'issue:comment_created': typeof Issue.CommentCreated;
        'issue:created': typeof Issue.Created;
        'issue:updated': typeof Issue.Updated;
        'pullrequest:approved': typeof PullReqest.Approved;
        'pullrequest:comment_created': typeof PullReqest.CommentedCreated;
        'pullrequest:comment_deleted': typeof PullReqest.CommentDeleted;
        'pullrequest:comment_updated': typeof PullReqest.CommentUpdated;
        'pullrequest:created': typeof PullReqest.Created;
        'pullrequest:fulfilled': typeof PullReqest.Merged;
        'pullrequest:rejected': typeof PullReqest.Declined;
        'pullrequest:unapproved': typeof PullReqest.ApprovalRemoved;
        'pullrequest:updated': typeof PullReqest.Updated;
        'repo:commit_comment_created': typeof Repository.CommitCommentCreated;
        'repo:commit_status_created': typeof Repository.BuildStatusCreated;
        'repo:commit_status_updated': typeof Repository.BuildStatusUpdated;
        'repo:fork': typeof Repository.Fork;
        'repo:push': typeof Repository.Push;
        'repo:transfer': typeof Repository.Transfer;
        'repo:updated': typeof Repository.Updated;
    }>;
}
