import { Logger } from '../logging/Logger';
import { PipeClass } from './Pipe';
import { Callback, UseFunction } from './Types';
import { Condition, FilterFromFunction, PipeFunction, ValueCall } from './Types';
export declare function PipeArray<V>(item: V[] | Promise<V[]> | ValueCall<V[]> | PipeClass<V[]> | PipeArrayClass<V>, logger?: Logger): PipeArrayClass<V>;
export declare class PipeArrayClass<V> extends PipeClass<V[]> {
    constructor(item: V[] | Promise<V[]> | ValueCall<V[]> | PipeClass<V[]> | PipeArrayClass<V>, logger?: Logger);
    each<Y>(func: PipeFunction<V, Y>, waterfallExec?: boolean, logger?: Logger): PipeArrayClass<Y>;
    arrayEach<Y>(func: PipeFunction<V, Y[]>, waterfallExec?: boolean): PipeArrayClass<Y>;
    use(func: UseFunction<V[]>): PipeArrayClass<V>;
    useEach(func: UseFunction<V>, waterfallExec?: boolean): PipeArrayClass<V>;
    batch(amount: number): PipeArrayClass<V[]>;
    getEach(cb: Callback<V>): Promise<void>;
    filter(condition: Condition<V>): PipeArrayClass<V>;
    filterFrom(from: FilterFromFunction<V>): PipeArrayClass<V>;
    protected checkWaterfallExec<X, Y>(i: X[], should: boolean, func: PipeFunction<X, Y>): Promise<Y[]>;
    protected getWaterfallExec<X, Y>(i: X[], func: PipeFunction<X, Y>): Promise<Y[]>;
    protected getWaterfallExecRec<X, Y>(i: X[], total: number, finished: Y[], func: PipeFunction<X, Y>): Promise<Y[]>;
    private filterPromise;
}
