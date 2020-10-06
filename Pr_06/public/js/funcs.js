import * as tasks from "./tasks.js";
function task1(x) {
    let a = document.getElementById("answer");
    if (a != null) {
        a.innerHTML = tasks.arraySum(x.split(" ").map(n => parseInt(n))).toString();
    }
}
function task8(x, y) {
    let a = document.getElementById("answer");
    if (a != null) {
        a.innerHTML = tasks.zipEqualCount(x.split(" ").map(n => parseInt(n)), y.split(" ").map(n => parseInt(n))).toString();
    }
}
function task26(x) {
    let a = document.getElementById("answer");
    if (a != null) {
        a.innerHTML = tasks.MinMax.differenceMaxMin(x.split(" ").map(n => parseInt(n))).toString();
    }
}
window.task1 = task1;
window.task8 = task8;
window.task26 = task26;
