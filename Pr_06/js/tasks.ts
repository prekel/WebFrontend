// 1. Найти сумму элементов последовательности.
export const arraySum = (a: number[]) => a.reduce((s, v) => s + v);

// 8. Сколько соответствующих элементов двух последовательностей с одинаковым количеством элементов совпадают?
export function zipEqualCount(a: number[], b: number[]) {
    return a.map((elementA, index) => {
        const elementB = b[index];
        return { a: elementA, b: elementB };
    }).reduce((count, value) =>
        count + (value.a == value.b ? 1 : 0), 0
    )
}

// 26. Найти разность максимального и минимального элементов последовательности.
export class MinMax {
    min: number;
    max: number;

    constructor(min: number = Number.MAX_VALUE, max: number = Number.MIN_VALUE) {
        this.min = min;
        this.max = max;
    }

    public static findMinMax(items: number[]) {
        return items.reduce(
            (accumulator, currentValue) => new MinMax(Math.min(currentValue, accumulator.min), Math.max(currentValue, accumulator.max)),
            new MinMax()
        );
    }

    public static differenceMaxMin(items: number[]) {
        let res = MinMax.findMinMax(items);
        return res.max - res.min;
    }
}
