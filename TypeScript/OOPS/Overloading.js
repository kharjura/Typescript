// function overloading in typescript
// step1:create multiple functions with the same name but different parameters
// step2: keep the overloaded functions without implimentation
// step3: impliment the functions by another function
function add(a, b) {
    return a + b;
}
var r1 = add(10, 20);
console.log(r1);
var r2 = add(10, "Banglore");
console.log(r2);
