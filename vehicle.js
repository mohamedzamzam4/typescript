var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("the ".concat(this.model, " Engine started"));
    };
    return Car;
}());
var car1 = new Car("mercedess GLA", "mercedess", 2020);
car1.start();
