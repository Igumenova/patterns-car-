import { WheelType } from "./wheelType";

export interface Wheel {
    model: WheelType;
}
export class HardWheel implements Wheel {
    model: WheelType = WheelType.HARD;
}
export class FastWheel implements Wheel {
    model: WheelType = WheelType.FAST;
}
export class SoftWheel implements Wheel {
    model: WheelType = WheelType.SOFT;
}
export class WheelFactory {
    getWheelByType(type: WheelType): Wheel {
        switch (type) {
            case WheelType.FAST:
                return new FastWheel();
            case WheelType.HARD:
                return new HardWheel();
            case WheelType.SOFT:
                return new SoftWheel();
            default:
                console.log("this wheel doesnt support, standard wheel soft");
                return new SoftWheel();
        }
    }
}
