export interface Engin {
    model: number;
    start(): void;
}
export class Engin2 implements Engin {
    model: number = 2;
    start() {
        console.log("engin 2 start");
    }
}
export class Engin4 implements Engin {
    model: number = 4;
    start() {
        console.log("engin 4 start");
    }
}
export class Engin8 implements Engin {
    model: number = 8;
    start() {
        console.log("engin 8 start");
    }
}
export class Engin16 implements Engin {
    model: number = 16;
    start() {
        console.log("engin 16 start");
    }
}
export class EnginFabric {
    createEngin(type: number): Engin | null {
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
    }
}
