"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const StringUtil_1 = require("../StringUtil");
const PipeArray_1 = require("./PipeArray");
const Types_1 = require("./Types");
function Pipe(item, logger) {
    return new PipeClass(item, logger);
}
exports.Pipe = Pipe;
class PipeClass {
    constructor(item, logger) {
        this.isArray = false;
        this.step = 1;
        this.activity = Types_1.Activity.Start;
        if (util_1.isFunction(item)) {
            item = item();
        }
        this.logger = logger;
        this.item = Promise.resolve(item).then(i => {
            this.log();
            if (i != null && (util_1.isObject(i) && i.constructor === Pipe || i.constructor === PipeArray_1.PipeArray)) {
                return i.promise();
            }
            return i;
        });
    }
    pipe(func) {
        return this.nextPipe(this.item.then(item => func(item)), Types_1.Activity.Pipe);
    }
    split(func) {
        return this.nextArrayPipe(this.item.then(item => func(item)), Types_1.Activity.PipeArray);
    }
    use(func) {
        return this.pipe(i => Promise.resolve(func(i)).then(() => i)).setInternalDetails(this.step + 1, Types_1.Activity.Use);
    }
    get(cb) {
        return this.item.then(cb);
    }
    ifError(cond, err) {
        return this.nextPipe(this.item.then(i => Promise.resolve(cond(i)).then(success => {
            if (success === true) {
                let error = new Error(`Undefined exception in pipe on step ${this.step} [${this.activity}].`);
                if (typeof err === 'function') {
                    error = err(i);
                }
                else if (err instanceof Error) {
                    error = err;
                }
                else if (typeof err === 'string') {
                    error = new Error(err);
                }
                throw error;
            }
            return i;
        })), Types_1.Activity.IfError);
    }
    promise() {
        return this.item;
    }
    catch(cb) {
        return this.item.catch(cb);
    }
    setInternalDetails(step, activity) {
        this.step = step;
        this.activity = activity;
        return this;
    }
    log(message) {
        if (this.logger != null) {
            this.logger.info(`[Pipe] Step (${this.step}): ${StringUtil_1.StringUtil.capitalizeFirst(Types_1.LOG_ACTIONS[this.activity])}. ${message != null ? `Detail: ${StringUtil_1.StringUtil.capitalizeFirst(message)}` : ''}`);
        }
    }
    nextPipe(item, activity) {
        return Pipe(item, this.logger).setInternalDetails(this.step + 1, activity);
    }
    nextArrayPipe(item, activity) {
        return PipeArray_1.PipeArray(item, this.logger).setInternalDetails(this.step + 1, activity);
    }
    asArray(item) {
        if (util_1.isArray(item)) {
            return item;
        }
        return [item];
    }
}
exports.PipeClass = PipeClass;
//# sourceMappingURL=Pipe.js.map