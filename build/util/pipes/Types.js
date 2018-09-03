"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Activity;
(function (Activity) {
    Activity["Start"] = "start";
    Activity["Pipe"] = "pipe";
    Activity["PipeArray"] = "pipeArray";
    Activity["Use"] = "use";
    Activity["Get"] = "get";
    Activity["Promise"] = "promise";
    Activity["PipeEach"] = "pipeEach";
    Activity["PipeArrayEach"] = "pipeArrayEach";
    Activity["UseEach"] = "useEach";
    Activity["GetEach"] = "getEach";
    Activity["Batch"] = "batch";
    Activity["ExecutingWaterfall"] = "executingWaterfall";
    Activity["ExecutingWaterfallIndividual"] = "executingWaterfallIndividual";
    Activity["Filter"] = "filter";
    Activity["FilterFrom"] = "filterFrom";
    Activity["IfError"] = "ifError";
})(Activity = exports.Activity || (exports.Activity = {}));
exports.LOG_ACTIONS = {
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
};
//# sourceMappingURL=Types.js.map