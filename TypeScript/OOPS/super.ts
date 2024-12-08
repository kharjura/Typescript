export {};
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    employeedId: number;
    Salary: number;
    constructor(name:string, age: number, employeeId: number, Salary: number) { // child class
        super(name, age);
        this.employeedId = employeeId;
        this.Salary = Salary;
    }
    printDetails() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.employeedId);
        console.log(this.Salary);
    }
}

let emp1: Employee = new Employee("Riya",21,123,1200);
emp1.printDetails();