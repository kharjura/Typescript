"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(eName, eAge, eId, eSalary) {
        this.eName = eName;
        this.eAge = eAge;
        this.eId = eId;
        this.eSalary = eSalary;
    }
    Employee.prototype.printDetails = function () {
        console.log("Employee Name ".concat(this.eName));
        console.log("Employee Age ".concat(this.eAge));
        console.log("Employee Id ".concat(this.eId));
        console.log("Employee Salary ".concat(this.eSalary));
    };
    return Employee;
}());
var emp1 = new Employee("Rakesh", 26, "Rakesh123", 1000);
emp1.printDetails();
// create a class shape with attributes length and breadth ,define functions to calculate
// area and perimeter of the shape. Calculate the area and perimeter of square and rectangle
