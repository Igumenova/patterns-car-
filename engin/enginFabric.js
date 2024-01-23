"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnginFabric = exports.Engin16 = exports.Engin8 = exports.Engin4 = exports.Engin2 = void 0;
var Engin2 = /** @class */ (function () {
    function Engin2() {
        this.model = 2;
    }
    Engin2.prototype.start = function () {
        console.log("engin 2 start");
    };
    return Engin2;
}());
exports.Engin2 = Engin2;
var Engin4 = /** @class */ (function () {
    function Engin4() {
        this.model = 4;
    }
    Engin4.prototype.start = function () {
        console.log("engin 4 start");
    };
    return Engin4;
}());
exports.Engin4 = Engin4;
var Engin8 = /** @class */ (function () {
    function Engin8() {
        this.model = 8;
    }
    Engin8.prototype.start = function () {
        console.log("engin 8 start");
    };
    return Engin8;
}());
exports.Engin8 = Engin8;
var Engin16 = /** @class */ (function () {
    function Engin16() {
        this.model = 16;
    }
    Engin16.prototype.start = function () {
        console.log("engin 16 start");
    };
    return Engin16;
}());
exports.Engin16 = Engin16;
var EnginFabric = /** @class */ (function () {
    function EnginFabric() {
    }
    EnginFabric.prototype.createEngin = function (type) {
        switch (type) {
            case 2:
                return new Engin2();
            case 4:
                return new Engin4();
            case 8:
                return new Engin8();
            case 16:
                return new Engin16();
            default:
                console.log("this engin doesnt support");
                return null;
        }
    };
    return EnginFabric;
}());
exports.EnginFabric = EnginFabric;
