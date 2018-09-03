"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FIRST_CAPITAL_REGEX = /^\b(\w)/;
const ALL_CAPITAL_REGEX = /\b\w/g;
var StringUtil;
(function (StringUtil) {
    function capitalizeFirst(val) {
        if (val == null) {
            return null;
        }
        return val.replace(FIRST_CAPITAL_REGEX, e => e.toUpperCase());
    }
    StringUtil.capitalizeFirst = capitalizeFirst;
    function capitalizeAll(val) {
        if (val == null) {
            return null;
        }
        return val.replace(ALL_CAPITAL_REGEX, e => e.toUpperCase());
    }
    StringUtil.capitalizeAll = capitalizeAll;
})(StringUtil = exports.StringUtil || (exports.StringUtil = {}));
//# sourceMappingURL=StringUtil.js.map