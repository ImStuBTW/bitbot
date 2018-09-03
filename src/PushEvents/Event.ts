import * as Issue from './Issue/IssueEvent';
import { Owner } from './PayloadTypes';
import * as PullReqest from './PullRequests/PullRequestEvent';
import * as Repository from './Repository/RepositoryEvent'

export type EventConfig = {
    owner: Owner
}

export enum EventType {
    Repository,
    PullRequest,
    Issue
}

export abstract class Event<T extends EventConfig> {
    protected config: T;

    constructor(config: T) {
        this.config = config;
    }

    get actor(): Owner {
        return Object.assign({}, this.config.owner);
    }

    public abstract toMessageObject(): any;
    public abstract type(): EventType;
}


export namespace Event {
    export const KeyMap = Object.freeze({
        'issue:comment_created': Issue.CommentCreated,
        'issue:created': Issue.Created,
        'issue:updated': Issue.Updated,
        'pullrequest:approved': PullReqest.Approved,
        'pullrequest:comment_created': PullReqest.CommentedCreated,
        'pullrequest:comment_deleted': PullReqest.CommentDeleted,
        'pullrequest:comment_updated': PullReqest.CommentUpdated,
        'pullrequest:created': PullReqest.Created,
        'pullrequest:fulfilled': PullReqest.Merged,
        'pullrequest:rejected': PullReqest.Declined,
        'pullrequest:unapproved': PullReqest.ApprovalRemoved,
        'pullrequest:updated': PullReqest.Updated,
        'repo:commit_comment_created': Repository.CommitCommentCreated,
        'repo:commit_status_created': Repository.BuildStatusCreated,
        'repo:commit_status_updated': Repository.BuildStatusUpdated,
        'repo:fork': Repository.Fork,
        'repo:push': Repository.Push,
        'repo:transfer': Repository.Transfer,
        'repo:updated': Repository.Updated,
    });
}