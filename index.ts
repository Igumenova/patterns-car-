import { CarBuilder } from "./car/carBuilder";
import { WheelType } from "./wheel/wheelType";

const carBuild = new CarBuilder(WheelType.FAST, 4);
const car = carBuild.build();
if (car) {
    const car1 = car.clone();
    car.go();
    car.getInfo();
    car.changeEngin(16);
    car.go();
}
