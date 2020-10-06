// 1. Найти сумму элементов последовательности.
export var arraySum = function (a) { return a.reduce(function (s, v) { return s + v; }); };
// 8. Сколько соответствующих элементов двух последовательностей с одинаковым количеством элементов совпадают?
export function zipEqualCount(a, b) {
    return a.map(function (elementA, index) {
        var elementB = b[index];
        return { a: elementA, b: elementB };
    }).reduce(function (count, value) {
        return count + (value.a == value.b ? 1 : 0);
    }, 0);
}
// 26. Найти разность максимального и минимального элементов последовательности.
var MinMax = /** @class */ (function () {
    function MinMax(min, max) {
        if (min === void 0) { min = Number.MAX_VALUE; }
        if (max === void 0) { max = Number.MIN_VALUE; }
        this.min = min;
        this.max = max;
    }
    MinMax.findMinMax = function (items) {
        return items.reduce(function (accumulator, currentValue) { return new MinMax(Math.min(currentValue, accumulator.min), Math.max(currentValue, accumulator.max)); }, new MinMax());
    };
    MinMax.differenceMaxMin = function (items) {
        var res = MinMax.findMinMax(items);
        return res.max - res.min;
    };
    return MinMax;
}());
export { MinMax };
