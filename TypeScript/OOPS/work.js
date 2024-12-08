"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var Bank = /** @class */ (function () {
    function Bank(accNo, ifsc, address, user) {
        this.accNo = accNo;
        this.ifsc = ifsc;
        this.address = address;
        this.user = user;
    }
    Bank.prototype.printDetails = function () {
        console.log("Account Number: ".concat(this.accNo));
        console.log("IFSC: ".concat(this.ifsc));
        console.log("Address: ".concat(this.address));
        console.log("User Name: ".concat(this.user.name));
        console.log("User Age: ".concat(this.user.age));
    };
    return Bank;
}());
var b1 = new Bank(12345, "123Abc000", "Bangalore", new User("Sindhu", 21));
b1.printDetails();
