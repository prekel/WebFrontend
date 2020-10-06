import * as tasks from "./tasks.js";

function task1(x: string) {
    document.write("<h1>" + tasks.arraySum(x.split(" ").map(n => parseInt(n))) + "</h1>");
}

function task8(x: string, y: string) {
    document.write("<h1>" + tasks.zipEqualCount(x.split(" ").map(n => parseInt(n)), y.split(" ").map(n => parseInt(n))) + "</h1>");
}

function task26(x: string) {
    document.write("<h1>" + tasks.MinMax.differenceMaxMin(x.split(" ").map(n => parseInt(n))) + "</h1>");
}

declare global {
    interface Window {
        task1(x: string): void;
        task8(x: string, y: string): void;
        task26(x: string): void;
    }
}

window.task1 = task1
window.task8 = task8
window.task26 = task26
