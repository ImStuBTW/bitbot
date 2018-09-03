export declare enum DebugLevel {
    Debug = "debug",
    All = "all",
    Error = "error",
    Info = "info",
    Off = "off",
    Trace = "trace",
    Warn = "warn"
}
export declare type LogFunction = (message: string) => any;
export declare type SimpleLogger = {
    log: LogFunction;
    info: LogFunction;
    warn: LogFunction;
    error: LogFunction;
};
export declare class Logger {
    private level;
    private prefix;
    private logger;
    constructor(prefix: string[], logger: SimpleLogger, level?: DebugLevel);
    warn(message: string): void;
    log(message: string): void;
    info(message: string): void;
    error(message: string): void;
    setDebugLevel(level: DebugLevel): void;
    private message;
    private shouldLog;
}
