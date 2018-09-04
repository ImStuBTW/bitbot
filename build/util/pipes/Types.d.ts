import { PipeClass } from './Pipe';
export declare type GenericItemFunction<T, K> = (item: T) => K | Promise<K>;
export declare type PipeFunction<T, K> = GenericItemFunction<T, K>;
export declare type UseFunction<T> = GenericItemFunction<T, any>;
export declare type ValueCall<T> = () => T | Promise<T>;
export declare type Callback<T> = (item: T) => any;
export declare type Condition<T> = GenericItemFunction<T, boolean>;
export declare type ConditionHandle<T, K, X> = GenericItemFunction<T, K | X>;
export declare type FilterFromFunction<T> = () => T[] | Promise<T[]>;
export declare type ErrorFunction<T> = (item: T) => Error;
export declare type ItemConstructorValue<T> = T | Promise<T> | ValueCall<T> | PipeClass<T>;
export declare enum Activity {
    Start = "start",
    Pipe = "pipe",
    PipeArray = "pipeArray",
    Use = "use",
    Get = "get",
    Promise = "promise",
    PipeEach = "pipeEach",
    PipeArrayEach = "pipeArrayEach",
    UseEach = "useEach",
    GetEach = "getEach",
    Batch = "batch",
    ExecutingWaterfall = "executingWaterfall",
    ExecutingWaterfallIndividual = "executingWaterfallIndividual",
    Filter = "filter",
    FilterFrom = "filterFrom",
    IfError = "ifError"
}
export declare const LOG_ACTIONS: {
    start: string;
    pipe: string;
    pipeArray: string;
    use: string;
    get: string;
    promise: string;
    pipeEach: string;
    pipeArrayEach: string;
    useEach: string;
    getEach: string;
    batch: string;
    executingWaterfall: string;
    executingWaterfallIndividual: string;
    filter: string;
    filterFrom: string;
};
