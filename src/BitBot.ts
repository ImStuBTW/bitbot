import * as bodyParser from 'body-parser';
import * as express from 'express';
import { DiscordEndpoint } from './Endpoints/Discord';
import { Endpoint } from './Endpoints/Endpoint';
import { SlackEndpoint } from './Endpoints/Slack';
import * as Event from './PushEvents/Event';
import { Logger } from './util/logging/Logger';
import { PipeArray } from './util/pipes/PipeArray';

export type BitBotConfig = {
    username: string,
    port: number,
    endpoints: { [name: string]: string }
}

const EndpointMap: { [name: string]: IEndpointConstructor } = {
    slack: SlackEndpoint,
    discord: DiscordEndpoint
}

const requiredConfig = ['username', 'port', 'endpoints'];

interface IEndpointConstructor {
    new(username: string, endpoint: string): Endpoint;
}

enum PayloadHeaders {
    EventKey = 'X-Event-Key',
    HookUUID = 'X-Hook-UUID',
    RequestUUID = 'X-Request-UUID',
    AttemptNumber = 'X-Attempt-Number'
}

export class BitBot {
    private server: express.Express;
    private config: BitBotConfig;
    private endpoints: Endpoint[];
    private logger: Logger;

    constructor(config: BitBotConfig) {
        this.config = config;
        this.verifyConfig();
        this.logger = new Logger(['BitBot', this.config.username], console);
        this.parseConfig();
    }

    public init() {
        this.server = express();

        this.server.use(bodyParser.json());
        this.server.post('/', this.handleResponse.bind(this));

        this.server.listen(this.config.port, () => {
            this.logger.info(`Running on port ${this.config.port}`);
        });
    }

    private handleResponse(req: express.Request, res: express.Response) {
        const eventName = req.header(PayloadHeaders.EventKey);
        const event = Event.Event.KeyMap[eventName];

        if (event == null) {
            this.logger.error(`Unknown event ${eventName}`);
            return;
        }

        const obj = new event(req.body).toMessageObject();
        this.endpoints.forEach(i => i.sendNotification(obj));
    }

    private verifyConfig() {
        const missing = [];

        for (const req of requiredConfig) {
            if (!(req in this.config)) {
                missing.push(req);
            }
        }

        if (missing.length > 0) {
            const message = `Invalid configuration. Missing items ${missing.join(', ')}`;
            this.logger.error(message);
            throw new Error(message);
        }
    }

    private parseConfig() {
        const endpoints: Endpoint[] = [];

        for (const endpointName in this.config.endpoints) {
            if (endpointName in EndpointMap) {
                this.logger.info(`Using endpoint ${endpointName}`);
                endpoints.push(new EndpointMap[endpointName](this.config.username, this.config.endpoints[endpointName]));
            } else {
                this.logger.warn(`Unkonwn endpoint ${endpointName}`);
            }
        }

        if (this.endpoints.length <= 0) {
            this.logger.error('No endpoints were registered.');
        }
        this.endpoints = endpoints;
    }
}