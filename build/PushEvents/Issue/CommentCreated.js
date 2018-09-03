"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IssueEvent_1 = require("./IssueEvent");
class CommentCreated extends IssueEvent_1.IssueEvent {
    constructor(config) {
        super(config);
    }
    toMessageObject() {
        return null;
    }
    issueEventType() {
        return IssueEvent_1.IssueEventType.CommentCreated;
    }
}
exports.CommentCreated = CommentCreated;
//# sourceMappingURL=CommentCreated.js.map