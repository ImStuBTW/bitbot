"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtil;
(function (ArrayUtil) {
    function batch(amount, vals) {
        const parentArr = [];
        let currArr = [];
        vals.forEach(i => {
            if (currArr.length < amount) {
                currArr.push(i);
            }
            else if (currArr.length >= amount) {
                parentArr.push(currArr);
                currArr = [];
            }
        });
        if (currArr.length > 0) {
            parentArr.push(currArr);
        }
        return parentArr;
    }
    ArrayUtil.batch = batch;
    function filterFrom(source, compare) {
        const set = new Set(compare);
        return source.filter(i => set.has(i));
    }
    ArrayUtil.filterFrom = filterFrom;
})(ArrayUtil = exports.ArrayUtil || (exports.ArrayUtil = {}));
//# sourceMappingURL=ArrayUtil.js.map