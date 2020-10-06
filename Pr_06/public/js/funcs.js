import * as tasks from "./tasks.js";
function task1(x) {
    document.write("<h1>" + tasks.arraySum(x.split(" ").map(n => parseInt(n))) + "</h1>");
}
function task8(x, y) {
    document.write("<h1>" + tasks.zipEqualCount(x.split(" ").map(n => parseInt(n)), y.split(" ").map(n => parseInt(n))) + "</h1>");
}
function task26(x) {
    document.write("<h1>" + tasks.MinMax.differenceMaxMin(x.split(" ").map(n => parseInt(n))) + "</h1>");
}
window.task1 = task1;
window.task8 = task8;
window.task26 = task26;
