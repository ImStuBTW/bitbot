"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./util/logging/Logger");
const logger = new Logger_1.Logger(['test'], console);
logger.setDebugLevel(Logger_1.DebugLevel.All);
logger.error('test');
//# sourceMappingURL=server.js.map