"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PullRequestEvent_1 = require("./PullRequestEvent");
class ApprovalRemoved extends PullRequestEvent_1.PullReqestEvent {
    constructor(config) {
        super(config);
    }
    toMessageObject() {
        return null;
    }
    pullRequestEventType() {
        return PullRequestEvent_1.PullRequestEventType.ApprovalRemoved;
    }
}
exports.ApprovalRemoved = ApprovalRemoved;
//# sourceMappingURL=ApprovalRemoved.js.map