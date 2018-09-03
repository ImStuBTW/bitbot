"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("../Event");
__export(require("./CommentCreated"));
__export(require("./Created"));
__export(require("./Updated"));
var IssueEventType;
(function (IssueEventType) {
    IssueEventType[IssueEventType["CommentCreated"] = 0] = "CommentCreated";
    IssueEventType[IssueEventType["Created"] = 1] = "Created";
    IssueEventType[IssueEventType["Updated"] = 2] = "Updated";
})(IssueEventType = exports.IssueEventType || (exports.IssueEventType = {}));
class IssueEvent extends Event_1.Event {
    constructor(config) {
        super(config);
    }
    get issue() {
        return Object.assign({}, this.config.issue);
    }
    get repository() {
        return Object.assign({}, this.config.repository);
    }
    type() {
        return Event_1.EventType.Issue;
    }
}
exports.IssueEvent = IssueEvent;
//# sourceMappingURL=IssueEvent.js.map