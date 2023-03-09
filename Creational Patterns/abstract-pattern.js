/* Singleton Pattern sadece bir tane instance oluşturulmasını sağlar. Ve bu sayede sınırlandırma yapar.
    Örneğin bir veritabanı bağlantısı oluşturulurken bu bağlantıyı sadece bir tane oluşturmak istiyoruz.
    Bu bağlantıyı oluşturmak için bir yapıya ihtiyaç vardır ve bu yapıyı da singleton oluşturur.
    Bu yöntem kodun okunabilirliğini arttırır ve kodun tekrar kullanılabilirliğini arttırır. */

// Örnek olarak veritabanı bağlantımız olduğunu varsayalım ve bu bağlantıyı sadece bir tane oluşturmak istiyoruz.

// Öncelikle veritabanı bağlantımızı oluşturan fonksiyonu yazalım.
function Database() {
  // Bu fonksiyonu sadece bir tane oluşturmak istiyoruz.
  if (Database.instance) {
    return Database.instance;
  }
  Database.instance = this;
  // Veritabanı bağlantımızı simüle edelim.
  this.connect = () => {
    console.log("Veritabanı bağlantısı başarılı");
  };
}

// Şimdi de bu bağlantıyı oluşturan bir yapı oluşturalım.
const db = new Database();

// Bağlantıyı kullanarak bir veritabanı bağlantısı oluşturalım.
db.connect();
