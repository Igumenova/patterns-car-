"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WheelFactory = exports.SoftWheel = exports.FastWheel = exports.HardWheel = void 0;
var wheelType_1 = require("./wheelType");
var HardWheel = /** @class */ (function () {
    function HardWheel() {
        this.model = wheelType_1.WheelType.HARD;
    }
    return HardWheel;
}());
exports.HardWheel = HardWheel;
var FastWheel = /** @class */ (function () {
    function FastWheel() {
        this.model = wheelType_1.WheelType.FAST;
    }
    return FastWheel;
}());
exports.FastWheel = FastWheel;
var SoftWheel = /** @class */ (function () {
    function SoftWheel() {
        this.model = wheelType_1.WheelType.SOFT;
    }
    return SoftWheel;
}());
exports.SoftWheel = SoftWheel;
var WheelFactory = /** @class */ (function () {
    function WheelFactory() {
    }
    WheelFactory.prototype.getWheelByType = function (type) {
        switch (type) {
            case wheelType_1.WheelType.FAST:
                return new FastWheel();
            case wheelType_1.WheelType.HARD:
                return new HardWheel();
            case wheelType_1.WheelType.SOFT:
                return new SoftWheel();
            default:
                console.log("this wheel doesnt support, standard wheel soft");
                return new SoftWheel();
        }
    };
    return WheelFactory;
}());
exports.WheelFactory = WheelFactory;
