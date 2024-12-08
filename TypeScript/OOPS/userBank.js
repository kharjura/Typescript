"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    return user;
}());
var Bank = /** @class */ (function () {
    function Bank(accNo, ifsc, address, user) {
        this.accNo = accNo;
        this.ifsc = ifsc;
        this.address = address;
        this.user = user;
    }
    Bank.prototype.printDetails = function () {
        console.log("Account Number:".concat(this.accNo));
        console.log("Ifsc:".concat(this.ifsc));
        console.log("Address:".concat(this.address));
        console.log("user name:".concat(this.user.name));
        console.log("user age:".concat(this.user.age));
    };
    return Bank;
}());
var b1 = new Bank(12345, "123Abc000", "Banglore", new user("Sindhu", 21));
b1.printDetails();
