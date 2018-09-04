"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebugLevel;
(function (DebugLevel) {
    DebugLevel["Debug"] = "debug";
    DebugLevel["All"] = "all";
    DebugLevel["Error"] = "error";
    DebugLevel["Info"] = "info";
    DebugLevel["Off"] = "off";
    DebugLevel["Trace"] = "trace";
    DebugLevel["Warn"] = "warn";
})(DebugLevel = exports.DebugLevel || (exports.DebugLevel = {}));
class Logger {
    constructor(prefix, logger, level = DebugLevel.Info) {
        this.level = level;
        this.logger = logger;
        let buildPrefix = '';
        for (const prefixStr of prefix) {
            buildPrefix += `[${prefixStr}]:`;
        }
        this.prefix = buildPrefix;
    }
    warn(message) {
        if (this.shouldLog([DebugLevel.Warn, DebugLevel.Trace])) {
            this.logger.warn(this.message(message, 'Warn'));
        }
    }
    log(message) {
        if (this.shouldLog([DebugLevel.Info])) {
            this.logger.log(this.message(message, 'Log'));
        }
    }
    info(message) {
        if (this.shouldLog([DebugLevel.Info])) {
            this.logger.info(this.message(message, 'Info'));
        }
    }
    error(message) {
        if (this.shouldLog([DebugLevel.Warn, DebugLevel.Trace, DebugLevel.Error])) {
            this.logger.error(this.message(message, 'Error'));
        }
    }
    setDebugLevel(level) {
        this.level = level;
    }
    message(msg, typeTag = null) {
        console.log(msg);
        return this.prefix + typeTag != null ? `[${typeTag}]` : '' + msg;
    }
    shouldLog(debugLevels) {
        if (this.level === DebugLevel.Off) {
            return false;
        }
        debugLevels.push(DebugLevel.All);
        debugLevels.push(DebugLevel.Debug);
        for (const debugLevel of debugLevels) {
            if (debugLevel === this.level) {
                return true;
            }
        }
        return false;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map