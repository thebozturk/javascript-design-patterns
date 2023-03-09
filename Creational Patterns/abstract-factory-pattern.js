/* Abstract Factory Pattern birden fazla factory sınıfınn kullanılmasını sağlar.
Bu sayede benzer amaçlar için birden fazla factory sınıfı oluşturulabilir.*/

/* Örnek olarak bir araba üretim fabrikası oluşturalım.
 Bu fabrikada 2 tane araba üretilebilir. Bunlardan biri otomatik vitesli diğeri manuel vitesli olabilir. */

// Öncelikle araba sınıfımızı oluşturalım.
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

// Şimdi de araba fabrikamızı oluşturalım.
class CarFactory {
  createCar(type) {
    switch (type) {
      case "Qashqai":
        return new Car(4, "V4", "gri");
      case "R34":
        return new Car(2, "V8", "siyah");
    }
  }
}

// Arabalarımızı listeleyebileceğimiz bir fonksiyon oluşturalım.
function showCars(cars) {
  console.log(
    `Araba: ${cars.doors} kapılı, ${cars.engine} motorlu, ${cars.color} renkli.`
  );
}

// Şimdi de bu fabrikayı kullanarak arabalarımızı oluşturalım.
const factory = new CarFactory();
const cars = [];

cars.push(factory.createCar("Qashqai"));
cars.push(factory.createCar("R34"));

// Arabalarımızı listeleyelim.
cars.forEach((car) => {
  showCars(car);
});
