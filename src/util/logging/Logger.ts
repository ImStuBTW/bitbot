export enum DebugLevel {
    Debug = 'debug', // All logs, detailed
    All = 'all', // All logs, not detailed
    Error = 'error', // Errors only
    Info = 'info', // Information only
    Off = 'off', // None
    Trace = 'trace', // Errors givee traces
    Warn = 'warn' // Warnings and errors
}

export type LogFunction = (message: string) => any;

export type SimpleLogger = {
    log: LogFunction,
    info: LogFunction,
    warn: LogFunction,
    error: LogFunction
}

export class Logger {
    private level: DebugLevel;
    private prefix: string;
    private logger: SimpleLogger;

    constructor(prefix: string[], logger: SimpleLogger, level: DebugLevel = DebugLevel.Info) {
        this.level = level;
        this.logger = logger;
        let buildPrefix = '';

        for (const prefixStr of prefix) {
            buildPrefix += `[${prefixStr}]:`
        }

        this.prefix = buildPrefix;
    }

    public warn(message: string) {
        if (this.shouldLog([DebugLevel.Warn, DebugLevel.Trace])) {
            this.logger.warn(this.message(message, 'Warn'));
        }
    }
    public log(message: string) {
        if (this.shouldLog([DebugLevel.Info])) {
            this.logger.log(this.message(message, 'Log'));
        }
    }
    public info(message: string) {
        if (this.shouldLog([DebugLevel.Info])) {
            this.logger.info(this.message(message, 'Info'));
        }
    }
    public error(message: string) {
        if (this.shouldLog([DebugLevel.Warn, DebugLevel.Trace, DebugLevel.Error])) {
            this.logger.error(this.message(`${message} at ${this.getErrorInfo()}`, 'Error'));
        }
    }

    public setDebugLevel(level: DebugLevel) {
        this.level = level;
    }

    private message(msg: string, typeTag: string = null) {
        return `${this.prefix}${typeTag != null ? `[${typeTag}]` : ''}: ${msg}`;
    }

    private shouldLog(debugLevels: DebugLevel[]) {
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

    private getErrorInfo() {
        const trace = new Error().stack.split('\n');
        const source = trace[3];

        const match = source.match(/\(.*\)/);
        return match[0].substring(1, match[0].length - 1);
    }
}