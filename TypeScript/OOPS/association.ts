class Earphone {
    brand: string;
    color: string;
    price: number;

    constructor(brand: string, color: string, price: number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
}

class mobile {
    mBrand: string;
    mcolor: string;
    mprice: number;
    earphone: Earphone;
    constructor(mBrand: string, mcolor: string, mprice: number){
        this.mBrand = mBrand;
        this.mcolor = mcolor;
        this.mprice = mprice;
    }

    connectEarphones(earphone: Earphone) {
        this.earphone = earphone;
    }

    displayDetails() {
        console.log("mobile brand: " + this.mBrand);
        console.log("mobile color: " + this.mcolor);
        console.log("mobile price: " + this.mprice);
        console.log("Earphone brand: " + this.earphone.brand);
        console.log("Earphone color: " + this.earphone.color);
        console.log("Earphone price: " + this.earphone.price);
    }
}

let m1 = new mobile("Samsung", "white", 20000);
m1.connectEarphones(new Earphone("samsung earpods","white", 5000));
m1.displayDetails();