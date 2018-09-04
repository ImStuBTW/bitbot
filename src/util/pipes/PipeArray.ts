import { ArrayUtil } from '../ArrayUtil';
import { Logger } from '../logging/Logger';
import { Pipe, PipeClass } from './Pipe';
import { Callback, UseFunction } from './Types';
import { Activity, Condition, FilterFromFunction, LOG_ACTIONS, PipeFunction, ValueCall } from './Types';

export function PipeArray<V>(item: V[] | Promise<V[]> | ValueCall<V[]> | PipeClass<V[]> | PipeArrayClass<V>, logger?: Logger): PipeArrayClass<V> {
    return new PipeArrayClass(item, logger);
}
export class PipeArrayClass<V> extends PipeClass<V[]>{
    constructor(item: V[] | Promise<V[]> | ValueCall<V[]> | PipeClass<V[]> | PipeArrayClass<V>, logger?: Logger) {
        super(item, logger);
    }

    /**
     * Pipes each individual value into the function. All returned values,
     * including promises, are then resolved into a new array.
     * @param func 
     * @param finished 
     * @return A new pipe with the changed data. Arrays are kept in order.
     */
    public each<Y>(func: PipeFunction<V, Y>, waterfallExec?: boolean, logger?: Logger): PipeArrayClass<Y> {
        const t = this.item.then(i => this.checkWaterfallExec(i, waterfallExec, func));
        return super.nextArrayPipe(t, Activity.PipeEach);
    }


    /**
     * Pipes each individual value into the function. All returned values,
     * including promises, are then resolved into a new array.
     * @param func 
     * @param finished 
     * @return A new pipe with the changed data. Arrays are kept in order.
     */
    public arrayEach<Y>(func: PipeFunction<V, Y[]>, waterfallExec?: boolean): PipeArrayClass<Y> {
        const t = this.item
            .then(i => this.checkWaterfallExec(i, waterfallExec, func))
            .then(results => {
                const single = [];
                results.forEach(i => i.forEach(x => single.push(x)));
                return single;
            });

        return super.nextArrayPipe(t, Activity.PipeArrayEach);
    }

    /**
     * Use the current data without changing it.
     * It is important to note that the next pipe event will not occur
     * until all of the use functions have finished. 
     * @param func The func to use
     * @return A pipe with the same data.
     */
    public use(func: UseFunction<V[]>): PipeArrayClass<V> {
        const prom = this.item.then(item => Promise.resolve(func(item)).then(() => item));
        return super.nextArrayPipe(prom, Activity.Use);
    }

    /**
     * Uses each value in the array. 
     * It is important to note that the next pipe event will not begin
     * until all use functions are finished.
     * @param func 
     */
    public useEach(func: UseFunction<V>, waterfallExec?: boolean): PipeArrayClass<V> {
        const prom = i => Promise.resolve(func(i)).then(() => i);
        return this.each(prom, waterfallExec).setInternalDetails(this.step + 1, Activity.UseEach);
    }

    public batch(amount: number): PipeArrayClass<V[]> {
        return super.nextArrayPipe(
            this.item.then(i => ArrayUtil.batch(amount, i)),
            Activity.Batch
        );
    }

    /**
     * Ends the pipe and returns each value separately.
     * @param cb
     */
    public getEach(cb: Callback<V>) {
        return this.item.then(i => i.forEach(ind => cb(ind)));
    }

    /**
     * Filters out the items
     * @param condition 
     */
    public filter(condition: Condition<V>) {
        return this.nextArrayPipe(this.item.then(i => this.filterPromise(i, condition)), Activity.Filter);
    }

    /**
     * Filters out items that are in the array.
     * @param from 
     */
    public filterFrom(from: FilterFromFunction<V>) {
        return this.nextArrayPipe(
            this.item.then(i =>
                Promise.resolve(from()).then(h =>
                    ArrayUtil.filterFrom(i, h))),
            Activity.FilterFrom);
    }

    protected checkWaterfallExec<X, Y>(i: X[], should: boolean, func: PipeFunction<X, Y>) {
        if (should === true) {
            return this.getWaterfallExec(i, func);
        } else {
            return Promise.all(i.map(x => func(x)));
        }
    }

    protected getWaterfallExec<X, Y>(i: X[], func: PipeFunction<X, Y>) {
        this.log(LOG_ACTIONS.executingWaterfall);
        return this.getWaterfallExecRec(i, i.length, [], func)
    }

    protected getWaterfallExecRec<X, Y>(i: X[], total: number, finished: Y[], func: PipeFunction<X, Y>): Promise<Y[]> {
        this.log(LOG_ACTIONS.executingWaterfallIndividual);
        return Promise.resolve(func(i[0]))
            .then(val => {
                this.log(`Finished waterfall step ${total - i.length}/${total}`);
                return i.length <= 1 ?
                    [val, ...finished] : this.getWaterfallExecRec(i.slice(1), total, [val, ...finished], func)
            })
    }

    private filterPromise(items: V[], condition: Condition<V>): Promise<V[]> {
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
            }))
        });
    }
}