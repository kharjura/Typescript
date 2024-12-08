"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine = /** @class */ (function () {
    function Engine(power, cc) {
        this.power = power;
        this.cc = cc;
    }
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(color, type, seats, engine) {
        this.color = color;
        this.type = type;
        this.seats = seats;
        this.engine = engine;
    }
    Car.prototype.printDetails = function () {
        console.log("Car Details:");
        console.log(this.color);
        console.log(this.type);
        console.log(this.seats);
        console.log("Engine of the Car:");
        console.log(this.engine.power);
        console.log(this.engine.cc);
    };
    return Car;
}());
var Car1 = new Car("red", "suv", 7, new Engine(12, 1500));
Car1.printDetails();
