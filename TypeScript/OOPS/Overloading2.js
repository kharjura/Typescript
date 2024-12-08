"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var overloadFn = /** @class */ (function () {
    function overloadFn() {
    }
    overloadFn.prototype.add = function (a, b) {
        return a + b;
    };
    return overloadFn;
}());
var obj1 = new overloadFn();
var r1 = obj1.add(10, 20);
console.log(r1);
var r2 = obj1.add("Delhi", 40);
console.log(r2);
