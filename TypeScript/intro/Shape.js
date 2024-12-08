"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape = /** @class */ (function () {
    function shape(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    shape.prototype.Area = function () {
        return this.length * this.breadth;
    };
    shape.prototype.perimeter = function () {
        return 2 * (this.length + this.breadth);
    };
    return shape;
}());
var square = new shape(4, 4);
console.log("Area of square is:".concat(square.Area()));
console.log("perimeter of square is: ".concat(square.perimeter()));
var rectangle = new shape(10, 5);
console.log("Area of rectangle is: ".concat(rectangle.Area()));
console.log("perimeter of rectangle is: ".concat(rectangle.perimeter));
