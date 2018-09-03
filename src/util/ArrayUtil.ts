export namespace ArrayUtil {
    export function batch<T>(amount, vals: T[]): T[][] {
        const parentArr = [];
        let currArr = [];

        vals.forEach(i => {
            if (currArr.length < amount) {
                currArr.push(i);
            } else if (currArr.length >= amount) {
                parentArr.push(currArr);
                currArr = [];
            }
        });

        if (currArr.length > 0) { parentArr.push(currArr); }

        return parentArr;
    }

    export function filterFrom<T>(source: T[], compare: T[]) {
        const set = new Set(compare);

        return source.filter(i => set.has(i));
    }
}
