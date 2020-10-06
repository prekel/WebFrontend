import * as tasks from "./tasks.js";

function task1(x: string) {
    let a = document.getElementById("answer");
    if (a != null) {
        a.innerHTML = tasks.arraySum(x.split(" ").map(n => parseInt(n))).toString();
    }
}

function task8(x: string, y: string) {
    let a = document.getElementById("answer");
    if (a != null) {
        a.innerHTML = tasks.zipEqualCount(x.split(" ").map(n => parseInt(n)), y.split(" ").map(n => parseInt(n))).toString();
    }
}

function task26(x: string) {
    let a = document.getElementById("answer");
    if (a != null) {
        a.innerHTML = tasks.MinMax.differenceMaxMin(x.split(" ").map(n => parseInt(n))).toString();
    }
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
