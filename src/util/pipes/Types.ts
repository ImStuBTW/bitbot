import { PipeClass } from './Pipe';
export type GenericItemFunction<T, K> = (item: T) => K | Promise<K>;

export type PipeFunction<T, K> = GenericItemFunction<T, K>;
export type UseFunction<T> = GenericItemFunction<T, any>;
export type ValueCall<T> = () => T | Promise<T>;
export type Callback<T> = (item: T) => any;
export type Condition<T> = GenericItemFunction<T, boolean>;
export type ConditionHandle<T, K, X> = GenericItemFunction<T, K | X>;
export type FilterFromFunction<T> = () => T[] | Promise<T[]>;
export type ErrorFunction<T> = (item: T) => Error;

export type ItemConstructorValue<T> = T | Promise<T> | ValueCall<T> | PipeClass<T>;

export enum Activity {
    Start = 'start',
    Pipe = 'pipe',
    PipeArray = 'pipeArray',
    Use = 'use',
    Get = 'get',
    Promise = 'promise',
    PipeEach = 'pipeEach',
    PipeArrayEach = 'pipeArrayEach',
    UseEach = 'useEach',
    GetEach = 'getEach',
    Batch = 'batch',
    ExecutingWaterfall = 'executingWaterfall',
    ExecutingWaterfallIndividual = 'executingWaterfallIndividual',
    Filter = 'filter',
    FilterFrom = 'filterFrom',
    IfError = 'ifError'
}

export const LOG_ACTIONS = {
    start: 'starting the pipe',
    pipe: 'pipe single',
    pipeArray: 'pipe into array',
    use: 'use single',
    get: 'get single',
    promise: 'to promise',
    pipeEach: 'pipe each',
    pipeArrayEach: 'pipe each to array',
    useEach: 'use each',
    getEach: 'get each',
    batch: 'batching elements',
    executingWaterfall: 'executing waterfall function',
    executingWaterfallIndividual: 'executing waterfall step',
    filter: 'filter',
    filterFrom: 'filtering from'
}
