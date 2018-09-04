"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("../Event");
__export(require("./ApprovalRemoved"));
__export(require("./Approved"));
__export(require("./CommentDeleted"));
__export(require("./CommentedCreated"));
__export(require("./CommentedUpdated"));
__export(require("./Created"));
__export(require("./Declined"));
__export(require("./Merged"));
__export(require("./Updated"));
var PullRequestEventType;
(function (PullRequestEventType) {
    PullRequestEventType[PullRequestEventType["Created"] = 0] = "Created";
    PullRequestEventType[PullRequestEventType["Updated"] = 1] = "Updated";
    PullRequestEventType[PullRequestEventType["Approved"] = 2] = "Approved";
    PullRequestEventType[PullRequestEventType["ApprovalRemoved"] = 3] = "ApprovalRemoved";
    PullRequestEventType[PullRequestEventType["Merged"] = 4] = "Merged";
    PullRequestEventType[PullRequestEventType["Declined"] = 5] = "Declined";
    PullRequestEventType[PullRequestEventType["CommentCreated"] = 6] = "CommentCreated";
    PullRequestEventType[PullRequestEventType["CommentUpdated"] = 7] = "CommentUpdated";
    PullRequestEventType[PullRequestEventType["CommentDeleted"] = 8] = "CommentDeleted";
})(PullRequestEventType = exports.PullRequestEventType || (exports.PullRequestEventType = {}));
class PullReqestEvent extends Event_1.Event {
    constructor(config) {
        super(config);
    }
    get pullrequest() {
        return Object.assign({}, this.config.pullrequest);
    }
    get repository() {
        return Object.assign({}, this.config.repository);
    }
    type() {
        return Event_1.EventType.Issue;
    }
}
exports.PullReqestEvent = PullReqestEvent;
//# sourceMappingURL=PullRequestEvent.js.map