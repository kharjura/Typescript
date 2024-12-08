export {};
class shape {
  length: number;
  breadth: number;
    constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }

    Area() {
        return this.length * this.breadth;
    }
    perimeter(){
        return 2 * (this.length + this.breadth);
    }
}

let square = new shape(4,4);
console.log(`Area of square is:${square.Area()}`);
console.log(`perimeter of square is: ${square.perimeter()}`);

let rectangle = new shape(10,5);
console.log(`Area of rectangle is: ${rectangle.Area()}`);
console.log(`perimeter of rectangle is: ${rectangle.perimeter}`);