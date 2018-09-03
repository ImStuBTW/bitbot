"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepositoryEvent_1 = require("./RepositoryEvent");
class Transfer extends RepositoryEvent_1.RepositoryEvent {
    constructor(config) {
        super(config);
    }
    toMessageObject() {
        return null;
    }
    repositoryEventType() {
        return RepositoryEvent_1.RepositoryEventType.Transfer;
    }
}
exports.Transfer = Transfer;
//# sourceMappingURL=Transfer.js.map