// abstruction is the process of hiding the implimentation and providing only the 
// functionality
// how to impliment:
// 1.Define an abstract class (cannot be instantiated/create an object)
// 2. Define abstract functions (do not have function body)
// 3. create a concrete class that inherits from the abstract class
// 4.Impliment the abstract functions in the concrete class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myclass1 = /** @class */ (function () {
    function myclass1() {
    }
    return myclass1;
}());
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubClass.prototype.up = function () {
        console.log("Going up");
    };
    SubClass.prototype.down = function () {
        console.log("Going Down");
    };
    return SubClass;
}(myclass1));
// let obj1 = new myclass1();
//Error: Cannot create an instance of an abstract class.
//obj1.up(); // Error property "up" in type "myclass1" is
//abstract and must be implimented in SubClass Symbol
var myobj = new SubClass();
myobj.up(); // output: Going up
myobj.down(); // Going Down
