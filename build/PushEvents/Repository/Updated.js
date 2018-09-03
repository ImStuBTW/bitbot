"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepositoryEvent_1 = require("./RepositoryEvent");
class Updated extends RepositoryEvent_1.RepositoryEvent {
    constructor(config) {
        super(config);
    }
    toMessageObject() {
        return null;
    }
    repositoryEventType() {
        return RepositoryEvent_1.RepositoryEventType.Updated;
    }
}
exports.Updated = Updated;
//# sourceMappingURL=Updated.js.map