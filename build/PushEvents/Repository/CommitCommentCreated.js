"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepositoryEvent_1 = require("./RepositoryEvent");
class CommitCommentCreated extends RepositoryEvent_1.RepositoryEvent {
    constructor(config) {
        super(config);
    }
    toMessageObject() {
        return null;
    }
    repositoryEventType() {
        return RepositoryEvent_1.RepositoryEventType.CommitCreated;
    }
}
exports.CommitCommentCreated = CommitCommentCreated;
//# sourceMappingURL=CommitCommentCreated.js.map