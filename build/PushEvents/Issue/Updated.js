"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IssueEvent_1 = require("./IssueEvent");
class Updated extends IssueEvent_1.IssueEvent {
    constructor(config) {
        super(config);
    }
    toMessageObject() {
        return null;
    }
    issueEventType() {
        return IssueEvent_1.IssueEventType.Updated;
    }
}
exports.Updated = Updated;
//# sourceMappingURL=Updated.js.map