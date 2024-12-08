class Employee {
    private name: string;
    private contact: number;
    private Salary : number;

    constructor(name: string, contact: number, salary: number) {
        this.name = name;
        this.contact = contact;
        this.Salary = salary;
    }
    // get function to acess the name
    getname() {
        return this.name;
    }
    setContact(newContact: number) {
        this.contact = newContact;
        console.log("Contact updated successfully"); // update set()
        // 
    }
    getContact() {
        return this.contact;
    }
    setSalary(newSalary: number) {
        this.Salary = newSalary;
        console.log(this.name + "salary got updated");
    }
}

let e1 = new Employee("Rahul", 456789023,1500);
console.log(e1.getname());
console.log(e1.getContact());
const newContact = 123456789;
e1.setContact(newContact);
console.log(e1.getContact());
let newSalary = 2500;
e1.setSalary(newSalary);
