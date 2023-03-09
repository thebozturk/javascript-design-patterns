/* Prototype Pattern bir nesnenin kopyasını oluşturmak için kullanılır.
Bu sayede nesnelerin kopyasını oluşturmak için bir yapıya ihtiyaç kalmaz.
Nesne yaratmak için bir yapı oluşturmak yerine nesnenin kopyasını oluşturmak daha pratiktir.
 */

// Öncelikle bir nesne oluşturalım.
const car = {
  doors: 4,
  state: "ikinci el",
  color: "mavi",
};

// Şimdi de bu nesnenin kopyasını oluşturalım.
const newCar = Object.create(car);

// Kopyamızın özelliklerini yazdıralım.
console.log(
  `Aracımızın kapı sayısı: ${newCar.doors}, durumu: ${newCar.state}, rengi: ${newCar.color}`
);
