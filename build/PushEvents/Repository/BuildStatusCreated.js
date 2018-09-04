"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepositoryEvent_1 = require("./RepositoryEvent");
class BuildStatusCreated extends RepositoryEvent_1.RepositoryEvent {
    constructor(config) {
        super(config);
    }
    toMessageObject() {
        return null;
    }
    repositoryEventType() {
        return RepositoryEvent_1.RepositoryEventType.BuildStatusCreated;
    }
}
exports.BuildStatusCreated = BuildStatusCreated;
//# sourceMappingURL=BuildStatusCreated.js.map