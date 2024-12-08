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
// The phenomenon of acquiring the super class properties into the child class : inheritance
// The child class can acess the properties of the parent class
// It is designated using the keyword: extends
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.printDetails = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.eId);
        console.log(this.eSalary);
    };
    return Employee;
}(Person));
var Emp1 = new Employee();
Emp1.name = "Sindhu";
Emp1.age = 20;
Emp1.eId = 101;
Emp1.eSalary = 50000;
Emp1.printDetails();
