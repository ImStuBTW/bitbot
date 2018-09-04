export declare type BitBotConfig = {
    username: string;
    port: number;
    endpoints: {
        [name: string]: string;
    };
};
export declare class BitBot {
    private server;
    private config;
    private endpoints;
    private logger;
    constructor(config: BitBotConfig);
    init(): void;
    private handleResponse;
    private verifyConfig;
    private parseConfig;
}
