"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PullRequestEvent_1 = require("./PullRequestEvent");
class Merged extends PullRequestEvent_1.PullReqestEvent {
    constructor(config) {
        super(config);
    }
    toMessageObject() {
        return null;
    }
    pullRequestEventType() {
        return PullRequestEvent_1.PullRequestEventType.Merged;
    }
}
exports.Merged = Merged;
//# sourceMappingURL=Merged.js.map