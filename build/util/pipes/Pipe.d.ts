import { Logger } from '../logging/Logger';
import { PipeArrayClass } from './PipeArray';
import { Activity, Condition, ErrorFunction, PipeFunction, UseFunction, ValueCall } from './Types';
import { Callback } from './Types';
export declare function Pipe<T>(item: PipeClass<T> | T | Promise<T> | ValueCall<T>, logger?: Logger): PipeClass<T>;
export declare class PipeClass<T> {
    protected isArray: boolean;
    protected item: Promise<T>;
    protected step: number;
    protected logger: Logger;
    protected activity: string;
    constructor(item: PipeClass<T> | T | Promise<T> | ValueCall<T>, logger?: Logger);
    pipe<K>(func: PipeFunction<T, K>): PipeClass<K>;
    split<K>(func: PipeFunction<T, K[]>): PipeArrayClass<K>;
    use(func: UseFunction<T>): PipeClass<T>;
    get(cb?: Callback<T>): Promise<any>;
    ifError(cond: Condition<T>, err: Error | ErrorFunction<T>): PipeClass<T>;
    promise(): Promise<T>;
    catch(cb: any): Promise<T>;
    protected setInternalDetails(step: number, activity: Activity): this;
    protected log(message?: string): void;
    protected nextPipe<K>(item: K | Promise<K> | ValueCall<K> | PipeClass<K>, activity: Activity): PipeClass<K>;
    protected nextArrayPipe<X>(item: X[] | Promise<X[]> | ValueCall<X[]> | PipeClass<X[]>, activity: Activity): PipeArrayClass<X>;
    private asArray;
}
