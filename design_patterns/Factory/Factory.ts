// Interfejs produktu
interface Car {
    drive(): void;
}

// Konkretne produkty
class Sedan implements Car {
    drive() {
        console.log("Driving a sedan.");
    }
}

class SUV implements Car {
    drive() {
        console.log("Driving an SUV.");
    }
}

// Fabryka
class CarFactory {
    static createCar(type: "sedan" | "suv"): Car {
        if (type === "sedan") {
            return new Sedan();
        } else if (type === "suv") {
            return new SUV();
        }
        throw new Error("Unknown car type");
    }
}

// Przykład użycia
const sedan = CarFactory.createCar("sedan");
sedan.drive(); // Driving a sedan.

const suv = CarFactory.createCar("suv");
suv.drive(); // Driving an SUV.
