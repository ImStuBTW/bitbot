"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("../Event");
__export(require("./BuildStatusCreated"));
__export(require("./BuildStatusUpdated"));
__export(require("./CommitCommentCreated"));
__export(require("./Fork"));
__export(require("./Push"));
__export(require("./Transfer"));
__export(require("./Updated"));
var RepositoryEventType;
(function (RepositoryEventType) {
    RepositoryEventType[RepositoryEventType["Push"] = 0] = "Push";
    RepositoryEventType[RepositoryEventType["Fork"] = 1] = "Fork";
    RepositoryEventType[RepositoryEventType["Transfer"] = 2] = "Transfer";
    RepositoryEventType[RepositoryEventType["Updated"] = 3] = "Updated";
    RepositoryEventType[RepositoryEventType["CommitCreated"] = 4] = "CommitCreated";
    RepositoryEventType[RepositoryEventType["BuildStatusCreated"] = 5] = "BuildStatusCreated";
    RepositoryEventType[RepositoryEventType["BuildStatusUpdated"] = 6] = "BuildStatusUpdated";
})(RepositoryEventType = exports.RepositoryEventType || (exports.RepositoryEventType = {}));
class RepositoryEvent extends Event_1.Event {
    constructor(config) {
        super(config);
    }
    type() {
        return Event_1.EventType.Repository;
    }
    get repository() {
        return Object.assign({}, this.config.repository);
    }
}
exports.RepositoryEvent = RepositoryEvent;
//# sourceMappingURL=RepositoryEvent.js.map