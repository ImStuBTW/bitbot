import { isArray, isFunction, isObject } from 'util';
import { ArrayUtil } from '../ArrayUtil';
import { Logger } from '../logging/Logger';
import { StringUtil } from '../StringUtil';
import { PipeArray, PipeArrayClass } from './PipeArray';
import { Activity, Condition, ErrorFunction, LOG_ACTIONS, PipeFunction, UseFunction, ValueCall } from './Types';
import { Callback } from './Types';

export function Pipe<T>(item: PipeClass<T> | T | Promise<T> | ValueCall<T>, logger?: Logger) {
    return new PipeClass(item, logger);
}

/**
 * A custom piping class.
 * This pipe class is heavily interwoven with native Promises. The pipe expects
 * each previous value to execute (even if promise) full before the pipe will continue.
 */
export class PipeClass<T>{
    protected isArray: boolean = false;
    protected item: Promise<T>;
    protected step: number = 1; // What step of the pipeline we are on. This is for login purposes
    protected logger: Logger;
    protected activity: string = Activity.Start; // The activity that initiated this pipe, for loggin purposes

    constructor(item: PipeClass<T> | T | Promise<T> | ValueCall<T>, logger?: Logger) {
        if (isFunction(item)) {
            item = (item as ValueCall<T>)();
        }
        this.logger = logger;
        this.item = Promise.resolve(item as T | Promise<T>).then(i => {
            this.log();

            // If we get a pipe back, return the promise of that pipe
            if (i != null && (isObject(i) && i.constructor === Pipe || i.constructor === PipeArray)) {
                return (i as any).promise();
            }

            return i;
        });
    }

    /**
     * Pipe the current data into the function.
     * Creates a new pipe with the transformed data.
     * @param func 
     * @param finish 
     * @return New pipe with the new data
     */
    public pipe<K>(func: PipeFunction<T, K>): PipeClass<K> {
        return this.nextPipe<K>(this.item.then(item => func(item)), Activity.Pipe);
    }

    public split<K>(func: PipeFunction<T, K[]>): PipeArrayClass<K> {
        return this.nextArrayPipe(this.item.then(item => func(item)), Activity.PipeArray)
    }
    /**
     * Use the current data without changing it.
     * It is important to note that the next pipe event will not occur
     * until all of the use functions have finished. 
     * @param func The func to use
     * @return A pipe with the same data.
     */
    public use(func: UseFunction<T>): PipeClass<T> {
        return this.pipe(i => Promise.resolve(func(i)).then(() => i)).setInternalDetails(this.step + 1, Activity.Use);
    }

    /**
     * Ends the pipe and returns the current data
     * @param cb
     */
    public get(cb?: Callback<T>) {
        return this.item.then(cb);
    }

    // Conditionals
    public ifError(cond: Condition<T>, err: Error | ErrorFunction<T>) {
        return this.nextPipe<T>(this.item.then(i => Promise.resolve(cond(i)).then(success => {
            if (success === true) {
                let error: Error = new Error(`Undefined exception in pipe on step ${this.step} [${this.activity}].`);

                if (typeof err === 'function') {
                    error = err(i);
                } else if (err instanceof Error) {
                    error = err;
                } else if (typeof err === 'string') {
                    error = new Error(err);
                }

                throw error;
            }

            return i;
        })), Activity.IfError);
    }
    /**
     * Converts the pipe to a promise
     */
    public promise() {
        return this.item;
    }


    /**
     * On catch pipe
     * @param cb
     */
    public catch(cb) {
        return this.item.catch(cb);
    }

    protected setInternalDetails(step: number, activity: Activity) {
        this.step = step;
        this.activity = activity;

        return this;
    }

    protected log(message?: string) {
        if (this.logger != null) {
            this.logger.info(`[Pipe] Step (${this.step}): ${StringUtil.capitalizeFirst(LOG_ACTIONS[this.activity])}. ${message != null ? `Detail: ${StringUtil.capitalizeFirst(message)}` : ''}`);
        }
    }

    protected nextPipe<K>(item: K | Promise<K> | ValueCall<K> | PipeClass<K>, activity: Activity): PipeClass<K> {
        return Pipe(item, this.logger).setInternalDetails(this.step + 1, activity);
    }

    protected nextArrayPipe<X>(item: X[] | Promise<X[]> | ValueCall<X[]> | PipeClass<X[]>, activity: Activity): PipeArrayClass<X> {
        return PipeArray(item, this.logger).setInternalDetails(this.step + 1, activity);
    }

    private asArray<V, K extends Array<V>>(item: V | V[]): V[] {
        if (isArray(item)) {
            return item;
        }

        return [item];
    }
}