"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayUtil_1 = require("../ArrayUtil");
const Pipe_1 = require("./Pipe");
const Types_1 = require("./Types");
function PipeArray(item, logger) {
    return new PipeArrayClass(item, logger);
}
exports.PipeArray = PipeArray;
class PipeArrayClass extends Pipe_1.PipeClass {
    constructor(item, logger) {
        super(item, logger);
    }
    each(func, waterfallExec, logger) {
        const t = this.item.then(i => this.checkWaterfallExec(i, waterfallExec, func));
        return super.nextArrayPipe(t, Types_1.Activity.PipeEach);
    }
    arrayEach(func, waterfallExec) {
        const t = this.item
            .then(i => this.checkWaterfallExec(i, waterfallExec, func))
            .then(results => {
            const single = [];
            results.forEach(i => i.forEach(x => single.push(x)));
            return single;
        });
        return super.nextArrayPipe(t, Types_1.Activity.PipeArrayEach);
    }
    use(func) {
        const prom = this.item.then(item => Promise.resolve(func(item)).then(() => item));
        return super.nextArrayPipe(prom, Types_1.Activity.Use);
    }
    useEach(func, waterfallExec) {
        const prom = i => Promise.resolve(func(i)).then(() => i);
        return this.each(prom, waterfallExec).setInternalDetails(this.step + 1, Types_1.Activity.UseEach);
    }
    batch(amount) {
        return super.nextArrayPipe(this.item.then(i => ArrayUtil_1.ArrayUtil.batch(amount, i)), Types_1.Activity.Batch);
    }
    getEach(cb) {
        return this.item.then(i => i.forEach(ind => cb(ind)));
    }
    filter(condition) {
        return this.nextArrayPipe(this.item.then(i => this.filterPromise(i, condition)), Types_1.Activity.Filter);
    }
    filterFrom(from) {
        return this.nextArrayPipe(this.item.then(i => Promise.resolve(from()).then(h => ArrayUtil_1.ArrayUtil.filterFrom(i, h))), Types_1.Activity.FilterFrom);
    }
    checkWaterfallExec(i, should, func) {
        if (should === true) {
            return this.getWaterfallExec(i, func);
        }
        else {
            return Promise.all(i.map(x => func(x)));
        }
    }
    getWaterfallExec(i, func) {
        this.log(Types_1.LOG_ACTIONS.executingWaterfall);
        return this.getWaterfallExecRec(i, i.length, [], func);
    }
    getWaterfallExecRec(i, total, finished, func) {
        this.log(Types_1.LOG_ACTIONS.executingWaterfallIndividual);
        return Promise.resolve(func(i[0]))
            .then(val => {
            this.log(`Finished waterfall step ${total - i.length}/${total}`);
            return i.length <= 1 ?
                [val, ...finished] : this.getWaterfallExecRec(i.slice(1), total, [val, ...finished], func);
        });
    }
    filterPromise(items, condition) {
        return new Promise(res => {
            const filtered = [];
            let checked = 0;
            items.forEach(q => Promise.resolve(condition(q)).then(result => {
                checked++;
                if (result === false) {
                    filtered.push(q);
                }
                if (checked === items.length) {
                    res(filtered);
                }
            }));
        });
    }
}
exports.PipeArrayClass = PipeArrayClass;
//# sourceMappingURL=PipeArray.js.map