"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carBuilder_1 = require("./car/carBuilder");
var wheelType_1 = require("./wheel/wheelType");
var carBuild = new carBuilder_1.CarBuilder(wheelType_1.WheelType.FAST, 4);
var car = carBuild.build();
if (car) {
    var car1 = car.clone();
    car.go();
    car.getInfo();
    car.changeEngin(16);
    car.go();
}
