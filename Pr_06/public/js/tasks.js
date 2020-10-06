// 1. Найти сумму элементов последовательности.
export const arraySum = (a) => a.reduce((s, v) => s + v);
// 8. Сколько соответствующих элементов двух последовательностей с одинаковым количеством элементов совпадают?
export function zipEqualCount(a, b) {
    return a.map((elementA, index) => {
        const elementB = b[index];
        return { a: elementA, b: elementB };
    }).reduce((count, value) => count + (value.a == value.b ? 1 : 0), 0);
}
// 26. Найти разность максимального и минимальногоэлементов последовательности.
export class MinMax {
    constructor(min = Number.MAX_VALUE, max = Number.MIN_VALUE) {
        this.min = min;
        this.max = max;
    }
    static findMinMax(items) {
        return items.reduce((accumulator, currentValue) => new MinMax(Math.min(currentValue, accumulator.min), Math.max(currentValue, accumulator.max)), new MinMax());
    }
    static differenceMaxMin(items) {
        let res = MinMax.findMinMax(items);
        return res.max - res.min;
    }
}
