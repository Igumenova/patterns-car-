"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBuilder = void 0;
var car_1 = require("./car");
var wheelFactory_1 = require("../wheel/wheelFactory");
var enginFabric_1 = require("../engin/enginFabric");
var CarBuilder = /** @class */ (function () {
    function CarBuilder(wheel, engine) {
        this.doors = 4;
        this.color = "n/s";
        this.clearance = 20;
        this.space = 120;
        this.brand = "n/s";
        this.model = "n/s";
        this.setWheel(wheel);
        this.setEngin(engine);
    }
    CarBuilder.prototype.setDoors = function (doors) {
        this.doors = doors;
        return this;
    };
    CarBuilder.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    CarBuilder.prototype.setClearance = function (clearance) {
        this.clearance = clearance;
        return this;
    };
    CarBuilder.prototype.setSpace = function (space) {
        this.space = space;
        return this;
    };
    CarBuilder.prototype.setBrand = function (brand) {
        this.brand = brand;
        return this;
    };
    CarBuilder.prototype.setModel = function (model) {
        this.model = model;
        return this;
    };
    CarBuilder.prototype.setWheel = function (type) {
        var factory = new wheelFactory_1.WheelFactory();
        this.wheel = factory.getWheelByType(type);
        return this;
    };
    CarBuilder.prototype.setEngin = function (type) {
        var factory = new enginFabric_1.EnginFabric();
        this.engin = factory.createEngin(type);
        return this;
    };
    CarBuilder.prototype.build = function () {
        if (!this.engin) {
            console.log("Engine not set. Cannot build car.");
            return;
        }
        return new car_1.Car(this);
    };
    return CarBuilder;
}());
exports.CarBuilder = CarBuilder;
// export { CarBuilder };
