"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const Discord_1 = require("./Endpoints/Discord");
const Slack_1 = require("./Endpoints/Slack");
const Logger_1 = require("./util/logging/Logger");
const PipeArray_1 = require("./util/pipes/PipeArray");
const EndpointMap = {
    slack: Slack_1.SlackEndpoint,
    discord: Discord_1.DiscordEndpoint
};
const requiredConfig = ['username', 'port', 'endpoints'];
class BitBot {
    constructor(config) {
        this.config = config;
        this.verifyConfig();
        this.logger = new Logger_1.Logger(['BitBot', this.config.username], console);
        this.parseConfig();
    }
    init() {
        this.server = express();
        this.server.use(bodyParser.json());
        this.server.post('/', this.handleResponse.bind(this));
        this.server.listen(this.config.port, () => {
            this.logger.info(`Running on port ${this.config.port}`);
        });
    }
    handleResponse(req, res) {
        const message = {};
        PipeArray_1.PipeArray(this.endpoints)
            .each(i => i);
    }
    verifyConfig() {
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
    parseConfig() {
        const endpoints = [];
        for (const endpointName in this.config.endpoints) {
            if (endpointName in EndpointMap) {
                this.logger.info(`Using endpoint ${endpointName}`);
                endpoints.push(new EndpointMap[endpointName](this.config.endpoints[endpointName]));
            }
            else {
                this.logger.warn(`Unkonwn endpoint ${endpointName}`);
            }
        }
        if (this.endpoints.length <= 0) {
            this.logger.error('No endpoints were registered.');
        }
        this.endpoints = endpoints;
    }
}
exports.BitBot = BitBot;
//# sourceMappingURL=BitBot.js.map