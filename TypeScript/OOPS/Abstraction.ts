// abstruction is the process of hiding the implimentation and providing only the 
// functionality
// how to impliment:
// 1.Define an abstract class (cannot be instantiated/create an object)
// 2. Define abstract functions (do not have function body)
// 3. create a concrete class that inherits from the abstract class
// 4.Impliment the abstract functions in the concrete class

abstract class myclass1 {
    abstract up(): void;
    abstract down(): void;
}
class SubClass extends myclass1 {
    up(): void {
        console.log("Going up");
    }
    down(): void {
        console.log("Going Down");
    }
}
// let obj1 = new myclass1();
//Error: Cannot create an instance of an abstract class.
//obj1.up(); // Error property "up" in type "myclass1" is
//abstract and must be implimented in SubClass Symbol

let myobj: SubClass = new SubClass();
myobj.up(); // output: Going up
myobj.down(); // Going Down
