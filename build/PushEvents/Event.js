"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Issue = require("./Issue/IssueEvent");
const PullReqest = require("./PullRequests/PullRequestEvent");
const Repository = require("./Repository/RepositoryEvent");
var EventType;
(function (EventType) {
    EventType[EventType["Repository"] = 0] = "Repository";
    EventType[EventType["PullRequest"] = 1] = "PullRequest";
    EventType[EventType["Issue"] = 2] = "Issue";
})(EventType = exports.EventType || (exports.EventType = {}));
class Event {
    constructor(config) {
        this.config = config;
    }
    get actor() {
        return Object.assign({}, this.config.owner);
    }
}
exports.Event = Event;
(function (Event) {
    Event.KeyMap = Object.freeze({
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
})(Event = exports.Event || (exports.Event = {}));
//# sourceMappingURL=Event.js.map