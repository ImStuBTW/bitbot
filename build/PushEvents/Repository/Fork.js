"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepositoryEvent_1 = require("./RepositoryEvent");
class Fork extends RepositoryEvent_1.RepositoryEvent {
    constructor(config) {
        super(config);
    }
    toMessageObject() {
        return null;
    }
    repositoryEventType() {
        return RepositoryEvent_1.RepositoryEventType.Fork;
    }
}
exports.Fork = Fork;
//# sourceMappingURL=Fork.js.map