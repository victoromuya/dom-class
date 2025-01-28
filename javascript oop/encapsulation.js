
class Car {
    constructor(brand) {
    this._brand = brand;
    }
   get brand() {
    return this._brand;
    }
   set brand(newBrand) {
    this._brand = newBrand;
    }
   }

   
let myCar = new Car('Ford');
console.log(myCar.brand); // Ford

myCar.brand = 'BMW';
console.log(myCar.brand); // BMW