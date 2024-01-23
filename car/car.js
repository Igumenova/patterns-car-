"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var carBuilder_1 = require("./carBuilder");
var wheelFactory_1 = require("../wheel/wheelFactory");
var enginFabric_1 = require("../engin/enginFabric");
var Car = /** @class */ (function () {
    function Car(builder) {
        this.doors = builder.doors;
        this.color = builder.color;
        this.clearance = builder.clearance;
        this.space = builder.space;
        this.brand = builder.brand;
        this.model = builder.model;
        this.wheel = builder.wheel;
        this.engin = builder.engin;
        console.log("car created");
    }
    Car.prototype.getInfo = function () {
        console.log("Doors: ".concat(this.doors));
        console.log("Color: ".concat(this.color));
        console.log("Clearance: ".concat(this.clearance));
        console.log("Space: ".concat(this.space));
        console.log("Brand: ".concat(this.brand));
        console.log("Model: ".concat(this.model));
        console.log("Wheel: ".concat(this.wheel ? this.wheel.model : "None"));
        console.log("Engine: ".concat(this.engin ? this.engin.model : "None"));
    };
    Car.prototype.clone = function () {
        return new carBuilder_1.CarBuilder(this.wheel.model, this.engin ? this.engin.constructor : null)
            .setDoors(this.doors)
            .setColor(this.color)
            .setClearance(this.clearance)
            .setSpace(this.space)
            .setBrand(this.brand)
            .setModel(this.model)
            .build();
    };
    Car.prototype.changeWheel = function (type) {
        var factory = new wheelFactory_1.WheelFactory();
        this.wheel = factory.getWheelByType(type);
        return this;
    };
    Car.prototype.changeEngin = function (type) {
        var factory = new enginFabric_1.EnginFabric();
        this.engin = factory.createEngin(type);
        return this;
    };
    Car.prototype.go = function () {
        if (!this.engin) {
            console.log("Engine not set. Cannot go.");
            return;
        }
        this.engin.start();
        if ((this.engin instanceof enginFabric_1.Engin2 || this.engin instanceof enginFabric_1.Engin4) &&
            this.wheel instanceof wheelFactory_1.FastWheel) {
            console.log("car crash, change wheels");
        }
        if (this.engin instanceof enginFabric_1.Engin8 && this.wheel instanceof wheelFactory_1.FastWheel) {
            console.log("car crash, change wheels");
        }
        if (this.engin instanceof enginFabric_1.Engin16 &&
            (this.wheel instanceof wheelFactory_1.SoftWheel || this.wheel instanceof wheelFactory_1.HardWheel)) {
            console.log("car crash, change wheels");
        }
    };
    return Car;
}());
exports.Car = Car;
// export { Car };
