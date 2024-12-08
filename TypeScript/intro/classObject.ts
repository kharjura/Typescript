export {};
class Employee {
    eName: string;
    eAge: number;
    eId:string;
    eSalary:number;

constructor(eName: string,eAge:number, eId: string, eSalary: number) {
    this.eName = eName;
    this.eAge = eAge;
    this.eId = eId;
    this.eSalary = eSalary;
}
printDetails() {
    console.log(`Employee Name ${this.eName}`);
    console.log(`Employee Age ${this.eAge}`);
    console.log(`Employee Id ${this.eId}`);
    console.log(`Employee Salary ${this.eSalary}`);
}
}

let emp1: Employee = new Employee("Rakesh", 26, "Rakesh123", 1000);
emp1.printDetails();
 // create a class shape with attributes length and breadth ,define functions to calculate
 // area and perimeter of the shape. Calculate the area and perimeter of square and rectangle