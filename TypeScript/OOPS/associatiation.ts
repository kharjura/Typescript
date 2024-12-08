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
}