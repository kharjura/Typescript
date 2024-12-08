var Earphone = /** @class */ (function () {
    function Earphone(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    return Earphone;
}());
var mobile = /** @class */ (function () {
    function mobile(mBrand, mcolor, mprice) {
        this.mBrand = mBrand;
        this.mcolor = mcolor;
        this.mprice = mprice;
    }
    mobile.prototype.connectEarphones = function (earphone) {
        this.earphone = earphone;
    };
    mobile.prototype.displayDetails = function () {
        console.log("mobile brand: " + this.mBrand);
        console.log("mobile color: " + this.mcolor);
        console.log("mobile price: " + this.mprice);
        console.log("Earphone brand: " + this.earphone.brand);
        console.log("Earphone color: " + this.earphone.color);
        console.log("Earphone price: " + this.earphone.price);
    };
    return mobile;
}());
var m1 = new mobile("Samsung", "white", 20000);
m1.connectEarphones(new Earphone("samsung earpods", "white", 5000));
m1.displayDetails();
