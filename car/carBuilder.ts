import { Car } from "./car";
import { WheelFactory, Wheel } from "../wheel/wheelFactory";
import { WheelType } from "../wheel/wheelType";
import { Engin, EnginFabric } from "../engin/enginFabric";

export class CarBuilder {
    doors: number = 4;
    color: string = "n/s";
    clearance: number = 20;
    space: number = 120;
    brand: string = "n/s";
    model: string = "n/s";
    wheel: Wheel;
    engin: Engin | null;

    constructor(wheel: WheelType, engine: number) {
        this.setWheel(wheel);
        this.setEngin(engine);
    }
    setDoors(doors: number) {
        this.doors = doors;
        return this;
    }
    setColor(color: string) {
        this.color = color;
        return this;
    }
    setClearance(clearance: number) {
        this.clearance = clearance;
        return this;
    }
    setSpace(space: number) {
        this.space = space;
        return this;
    }
    setBrand(brand: string) {
        this.brand = brand;
        return this;
    }
    setModel(model: string) {
        this.model = model;
        return this;
    }
    setWheel(type: WheelType) {
        const factory = new WheelFactory();
        this.wheel = factory.getWheelByType(type);
        return this;
    }
    setEngin(type: number) {
        const factory = new EnginFabric();
        this.engin = factory.createEngin(type);
        return this;
    }
    build() {
        if (!this.engin) {
            console.log("Engine not set. Cannot build car.");
            return;
        }
        return new Car(this);
    }
}

// export { CarBuilder };
