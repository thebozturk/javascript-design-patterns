/* Buidler Pattern karışık yapıların basit bir yapıya dönüştürülmesini sağlar.
Örneğin bir araba yapıyoruz ve bu arabanın birçok özelliği var.
Bu özellikleri tek tek tanımlamak yerine bir yapı oluşturup bu yapıya özellikleri ekleyebiliriz.
Bu yapıyı da builder pattern ile oluşturabiliriz. */

// Öncelikle arabanın özelliklerini tanımlayalım.
function Car() {
  this.doors = 0;
  this.state = "kullanılmamış";
  this.color = "siyah";
}

// Şimdi de bu arabanın özelliklerini tanımlayan bir yapı oluşturalım.
function CarBuilder() {
  this.car = null;
  this.addDoors = () => {
    this.car.doors = 4;
  };
  this.addState = () => {
    this.car.state = "ikinci el";
  };
  this.addColor = () => {
    this.car.color = "mavi";
  };
  this.getCar = () => {
    return this.car;
  };
}

// Şimdi de bu yapıyı kullanarak bir araba oluşturalım.
const builder = new CarBuilder();
builder.car = new Car();

// Aracımıza özellikler ekleyelim.
builder.addDoors();
builder.addState();
builder.addColor();

// Aracımızın özelliklerini yazdıralım.
console.log(builder.getCar());
