// function overloading in typescript
// step1:create multiple functions with the same name but different parameters
// step2: keep the overloaded functions without implimentation
// step3: impliment the functions by another function

function add(a: number, b: number): number;

function add(a: number, b: string): any;

function add(a: any, b: any): any {
    return a+b;
}

let r1 = add(10, 20);
console.log(r1);
let r2 = add(10, "Banglore");
console.log(r2);
