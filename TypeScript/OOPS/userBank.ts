export {};
class user {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Bank {
    accNo: number;
    ifsc: string;
    address: string;
    user: user;

    constructor(accNo: number, ifsc: string, address:string, user: user) {
     this.accNo = accNo;
     this.ifsc = ifsc;
     this.address = address;
     this.user = user;
    }
    printDetails() {
        console.log(`Account Number:${this.accNo}`);
        console.log(`Ifsc:${this.ifsc}`);
        console.log(`Address:${this.address}`);
        console.log(`user name:${this.user.name}`);
        console.log(`user age:${this.user.age}`);
    }
}
let b1: Bank = new Bank(
    12345,
    "123Abc000",
    "Banglore",
    new user("Sindhu",21));
    b1.printDetails();