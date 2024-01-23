import { CarBuilder } from "./carBuilder";
import { WheelType } from "../wheel/wheelType";
import {
    WheelFactory,
    Wheel,
    FastWheel,
    SoftWheel,
    HardWheel,
} from "../wheel/wheelFactory";
import {
    Engin,
    EnginFabric,
    Engin16,
    Engin2,
    Engin4,
    Engin8,
} from "../engin/enginFabric";

interface Cloneable {
    clone(): any;
}
export class Car implements Cloneable {
    doors: number;
    color: string;
    clearance: number;
    space: number;
    brand: string;
    model: string;
    wheel: Wheel;
    engin: Engin | null;

    constructor(builder: CarBuilder) {
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
    getInfo() {
        console.log(`Doors: ${this.doors}`);
        console.log(`Color: ${this.color}`);
        console.log(`Clearance: ${this.clearance}`);
        console.log(`Space: ${this.space}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Wheel: ${this.wheel ? this.wheel.model : "None"}`);
        console.log(`Engine: ${this.engin ? this.engin.model : "None"}`);
    }

    clone() {
        return new CarBuilder(
            this.wheel.model,
            this.engin ? (this.engin.constructor as any) : null
        )
            .setDoors(this.doors)
            .setColor(this.color)
            .setClearance(this.clearance)
            .setSpace(this.space)
            .setBrand(this.brand)
            .setModel(this.model)
            .build();
    }

    changeWheel(type: WheelType) {
        const factory = new WheelFactory();
        this.wheel = factory.getWheelByType(type);
        return this;
    }
    changeEngin(type: number) {
        const factory = new EnginFabric();
        this.engin = factory.createEngin(type);
        return this;
    }

    go() {
        if (!this.engin) {
            console.log("Engine not set. Cannot go.");
            return;
        }
        this.engin.start();
        if (
            (this.engin instanceof Engin2 || this.engin instanceof Engin4) &&
            this.wheel instanceof FastWheel
        ) {
            console.log("car crash, change wheels");
        }
        if (this.engin instanceof Engin8 && this.wheel instanceof FastWheel) {
            console.log("car crash, change wheels");
        }
        if (
            this.engin instanceof Engin16 &&
            (this.wheel instanceof SoftWheel || this.wheel instanceof HardWheel)
        ) {
            console.log("car crash, change wheels");
        }
    }
}

// export { Car };
