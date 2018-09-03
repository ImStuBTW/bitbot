import { Owner } from './PayloadTypes';
import * as PullReqest from './PullRequests/PullRequestEvent';
import * as Issue from './Issue/IssueEvent';
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

    abstract toMessageObject(): any;
    abstract type(): EventType;
}

export class EventError extends Error {
    constructor(msg: string) {
        super(msg);
    }
}

export namespace Event {
    export const KeyMap = Object.freeze({
        'repo:push': Repository.Push,
        'repo:fork': Repository.Fork,
        'repo:updated': Repository.Updated,
        'repo:transfer': Repository.Transfer,
        'repo:commit_comment_created': Repository.CommitCommentCreated,
        'repo:commit_status_created': Repository.BuildStatusCreated,
        'repo:commit_status_updated': Repository.BuildStatusUpdated,
        'issue:created': Issue.Created,
        'issue:updated': Issue.Updated,
        'issue:comment_created': Issue.CommentCreated,
        'pullrequest:created': PullReqest.Created,
        'pullrequest:updated': PullReqest.Updated,
        'pullrequest:approved': PullReqest.Approved,
        'pullrequest:unapproved': PullReqest.ApprovalRemoved,
        'pullrequest:fulfilled': PullReqest.Merged,
        'pullrequest:rejected': PullReqest.Declined,
        'pullrequest:comment_created': PullReqest.CommentedCreated,
        'pullrequest:comment_updated': PullReqest.CommentUpdated,
        'pullrequest:comment_deleted': PullReqest.CommentDeleted
    });
}