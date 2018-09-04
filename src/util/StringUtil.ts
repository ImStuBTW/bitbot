const FIRST_CAPITAL_REGEX = /^\b(\w)/;
const ALL_CAPITAL_REGEX = /\b\w/g;

export namespace StringUtil {
    export function capitalizeFirst(val: string) {
        if (val == null) { return null; }

        return val.replace(FIRST_CAPITAL_REGEX, e => e.toUpperCase());
    }

    export function capitalizeAll(val: string) {
        if (val == null) { return null; }

        return val.replace(ALL_CAPITAL_REGEX, e => e.toUpperCase());
    }
}