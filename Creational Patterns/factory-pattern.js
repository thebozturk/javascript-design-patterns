/* Factory Patterni gerçek dünyadaki gibi nesne üreten bir yer olarak hayal edebiliriz.
  Örneğin bir fabrika nesne üretir ve bu fabrika bir nesne üretirken nesnenin özelliklerini belirler.
  Bu özelliklerin belirlenmesi için de bir yapıya ihtiyaç vardır ve Bu yapıyı da fabrika oluşturur
  Bu yöntem kodun okunabilirliğini arttırır ve kodun tekrar kullanılabilirliğini arttırır.*/

/* Örnek olarak bir yazılım şirketimiz olduğunu varsayalım ve iki çeşit çalışanımızın olduğunu düşünelim.
    Bunlar yazılımcı ve yöneticiler olmak üzere ikiye ayrılıyor.
    Bu iki çalışanı türünü veritabanımıza eklenmesini temiz bir şekilde yapılmasını istiyoruz.
 */

// Öncelikle yazılımcı türünde bir çalışan oluşturan fonksiyonu yazalım.

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

// Yönetici türünde bir çalışan oluşturan fonksiyonu yazalım.

function Manager(name) {
  this.name = name;
  this.type = "Manager";
}

// Şimdi de bu iki çalışanın türünü belirleyen bir fabrika oluşturalım.

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Manager(name);
    }
  };
}

// Çalışanlarımızı görmek için bir fonksiyon yazalım.
function say() {
  console.log(`${this.name} is a ${this.type}`);
}

// Şimdi de bu fabrikayı kullanarak çalışanlarımızı oluşturalım.
const employeeFactory = new EmployeeFactory();

// Veritabanımızdaki gibi bir array oluşturalım.
const employees = [];

// Şimdi de bu arraye çalışanlarımızı ekleyelim.
employees.push(employeeFactory.create("Buğrahan", 1));
employees.push(employeeFactory.create("John", 2));

// Son olarak da bu çalışanlarımızı bir döngü ile ekrana yazdıralım.
employees.forEach((emp) => {
  say.call(emp);
});
