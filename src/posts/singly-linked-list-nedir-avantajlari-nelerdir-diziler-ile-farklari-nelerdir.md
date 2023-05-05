---
  title: "Singly Linked List nedir? Avantajları nelerdir? Diziler ile farkları nelerdir?"
  date: "2021-10-05"
  author: "Orhan Özkerçin"
  excerpt: "Bilgisayar bilimlerin vazgeçilmez konularından singly link list nedir ve diziler ile farkları nelerdir
  konusunu anlatmaya çalıştığım blog yazısı."
  lang: "tr"
  cover: "cover.jpeg"
  image: "cover.jpeg"
---

Herkese selamlar, bilgisayar mühendisliği ya da benzer bölümleri okuyan ya da mezun olan herkesin mutlaka işittiği, mülakatlara girmeye hazırlanan yazılımcıların bilmek zorunda hissettiği, bilgisayar bilimlerinin en temel konularından olan “Data Structures(Veri Yapıları)”ların bir örneği olan “Singly Linked List”ler ile ilgili öğrendiklerimi bu yazımda aktarmaya çalışacağım.

Genelde üniversitenin 2. ya da 3. sınıflarında “Data Structures and Algorithms” dersi altında işlenen bu konular benim deneyimlediğim ve gözlemlediğim kadarıyla genelde çok önemsenmeyen ve sonraya bırakılan bir konu oluyor. Genelde dillere ve frameworklere daha çok ilgi duyuyoruz. Fakat kullandığımız hemen her yazılımda ve hatta kullandığımız programlama dillerinin tasarımlarında bu veri yapıları yoğunlukla kullanılıyor. Bu veri yapılarını bilmek ve çıkış noktalarını anlamak bize vizyon katacaktır ve problem çözme konusunda fayda sağlayacaktır. Bunun yanı sıra bazı durumlarda çok daha performanslı programlar yazmamızı sağlayacaktır.

List veri yapılarının nerelerde kullanıldığı hakkında fikir oluşması için kullanım alanlarından bahsetmek istiyorum.

- Stack ve Queue veri yapılarını “implement” etmek için kullanıyoruz. Bu veri yapılarını ise CTRL+Z ‘geri alma işlemi’ ve CTRL+Y ‘ileri alma işlemi’ gibi işlemlerde kullanıyoruz. Yani aslında her CTRL+Z yaptığımızda muhtemelen “Singly Linked List” kullanıyoruz.
- Sık sık ekleme ve çıkarma işlemi yapacağımız listelerde performans ihtiyacı olan yerlerde kullanıyoruz.
- Birbileri ile ilişkili verileri tutmamız gereken işlemlerde kullanıyoruz.

Kısaca elimizdeki verileri liste halinde tutmak istediğimizde bu veri yapılarını kullanıyoruz.

Bu şekilde yazdığımda eğer aklınıza “Ee bunu yapan zaten bir veri yapısı var: Diziler” diyorsanız, harikasınız! Diziler ve listler bir çok konuda birbirleri ile benzer işler yapıyorlar.

Eğer biraz kafanız karıştıysa sorun değil. Kısa bir ön bilgi vermek istedim. Şimdi tanımlamalar ve örneklerde daha açık bir şekilde anlatabileceğimi ümit ediyorum.

## Veri Yapıları dediğimiz şey nedir?

Yazının ilk paragrafında veri yapılarından bahsettim. Ben yakın zamana kadar sürekli duyduduğum ama tam olarak ne olduğunu anlayamadığım bir kelime öbeği ‘veri yapıları’. Tek bir cümle ile özetlemek gerekirse: Veri yapıları, elimizdeki verileri belirli kurallara göre erişip görüntüleyebildiğimiz, değiştirdiğimiz ya da sildiğimiz veri depolarıdır. Diziler bir veri yapısıdır. İçerisine verilerimizi koyarız, dilediğimizde erişip ekleme ve çıkartma yapabiliriz. Bunun yanı sıra classlar, objeler da bir çok dilde hazır olarak gelen veri yapılarıdır.

Esasında bu veri yapılarını bilmemizin de sebebi dillerin içinde direkt olarak bize sunulmasıdır. List, tree, hash gibi veri yapıları genelde dillerin bize direkt olarak sunmadığı şeyler olduğu için bu veri yapılarının diğerlerinden farklı bir amacı var gibi düşünüyoruz.

## Singly Linked List nedir?

![array-me-list](array-me-list.webp)

“Singly linked list” bir veya daha fazla veriyi birbirlerine bağlı bir şekilde depolayan, veri ekleme, silme ve veriye erişme işlemlerini yapabildiğimiz bir veri yapısıdır.

Örnek vermek gerekirse; tarayıcılarımızı düşünelim. Bilgisayarımızı açtık ve Chrome’a tıkladık. Ardından sırasıyda aşağıdaki işlemleri yaptık.

- Arama motoruna github.com yazdık.
- Github’a girdikten sonra “Sign in” butonuna bastık ve github.com/login sayfasına yönlendirildik.
- Sonrasında kullanıcı adımızı ve şifremizi girdik ve giriş yaptık. Site bizi github.com adresine geri yönlendirdi.
- Son olarak profil butonuna tıkladık ve github.com/OrhanOzkercin adresine geldik.

Gezdiğimiz tüm adresleri bir dizi içerisine koymak istersek elimize şöyle bir dizi geçecek.

```js
const adresses = [
  "google.com",
  "google.com/arama-sonucu",
  "github.com",
  "github.com/login",
  "github.com/OrhanOzkercin",
];
```

Fark ettiyseniz bir dizi dedim, list değil. Bu işlem çok kolaylıkla bir dizi ile gerçekleştirilebilir. Tarayıcıda geri butonuna bastığınız zaman kolaylıkla dizinin son elemanını uçurabiliriz bu da bize doğru sonucu verecektir. Bir diğer şekilde eğer ileri butonuna basarsak son çıkardığımızı tekrar dizinin sonuna ekleyebiliriz.

> **Önemli Not:** Dizinin sonuna ekleme işlemi JavaScript dilinde “constant time”da gerçekleşir. Fakat C, C++, Java, C# gibi dillerde diziler “memory”de ardı ardına dizilmiş bytelar olarak tutulmaktadır. Yani bir dizinin boyutu bellidir bu sebepten yukarıda bahsettiğim gibi dizinin sonuna bir eleman “pushlamak” daha zahmetli ve maliyetli bir iş olarak karşımıza çıkacaktır. JavaScriptde diziler nasıl çalışır merak ediyorsanız [buradaki link](https://stackoverflow.com/questions/66193920/how-does-array-push-method-work-exactly-in-javascript)te sorulmuş olan StackOverFlow sorusuna göz atabilirsiniz.

Bu işlem gayet doğru bir şekilde çalışacaktır. Fakat söylediğimiz gibi bizim yapacağımız tek işlem dizinin sonundan bir eleman çıkarmak ya da eklemek olacak. Biz herhangi bir zamanda bir indexe erişmek istemiyoruz. Bu senaryoda hiç bir zaman `adresses[2]` ye erişmeye çalışmayacağız. Dahası bunun erişebilir olmasını da istemiyoruz. Örneğimize bakacak olursak, kullanıcı bir önceki sayfayı görmeden daha öncesine gidememeli. Bunun yanı sıra dizinin verileri indexlemesine de gerek yok. Bu sebepten ötürü listler bu senaryo için daha bir çözüm olacaktır.

Aynı senaryonun liste olarak gösterimi şu şekilde:

```js
const adresses = {
  adress: "google.com",
  next: {
    adress: "google.com/arama-sonucu",
    next: {
      adress: "github.com",
      next: {
        adress: "github.com/login",
        next: {
          adress: "github.com",
          next: {
            adress: "github.com/OrhanOzkercin",
            next: null,
          },
        },
      },
    },
  },
};
```

İlk bakışta karışık gelebilir. Kısaca açıklamak gerekirse `addresses` isimli bir değişkenimiz var ve bu değişken bir object referans değeri tutuyor. Bu objectin iki elemanı var, ilki `address` yani verimizin kendisi, diğeri ise `next` yani bir sonraki adresi tutan object. Bu `next` in gösteriği object de aynı şekilde `address` ve bir sonraki adresi gösteren objecti tutuyor. Daha iyi açıklamak için aşağıdaki gibi düşünülebilir.

```js
//               next                            next               next                     next               next
//    Object 1   -->           Object 2          -->   Object 3     -->        Object 4      -->   Object 5     -->   Object 6

// 'google.com'  -->  'google.com/arama-sonucu'  -->  'github.com'  -->  'github.com/login'  -->  'github.com'  -->  'github.com/OrhanOzkercin'
```

Her bir adresi objectin verisi, next değişkeni ise bir sonraki objectin referans değerini saklıyor. Bu şekilde her adres bir sonraki adresi göstermiş oluyor.

Dizi ile yapılan çözüm size çok daha rahat görünüyor olabilir, hatta madem kolay bir şekilde yapıyoruz niye bu zahmete katlanalım diyebilirsiniz. Diziler ile listlerin hangi konularda ayrıştığına bakalım şimdi de.

---

Diziler ve listleri karşılaştırırken yukarıdaki örneğin bir farklı versiyonunu ele alacağım. Aradaki farkları anlatmam açısından daha iyi bir örnek olacağını düşünüyorum.

Örneğimiz şu şekilde: Online bir yarışma düzenlediğimiz bir proje yazdığımızı düşünelim. Yarışmamız için kayıt linki oluşturduk ve kayıt olacak olan herkesi kayıt olduğu sıra ile uygulamızda bir veri yapısında depolamak istiyoruz. Daha sonra kayıt olma sırasına göre bir oyun oynayacağımızı varsayalım. Oyunda her elenen kişiden sonra sıralamanın değiştiğini varsayalım. Örneğin; dizimizdeki ilk kullanıcı bir şekilde elendiyse artık ikinci kullanıcı ilk kullanıcı, üçüncü kullanıcı ikinci kullanıcı ve devamı da bu şekilde gidecek şekilde olmalıdır.

JavaScript dilinde çalıştığımızı ve dizilerin boyutunu arttırmak için kopyalamadan ‘push’ and ‘pop’ yapabildiğimizi düşünelim. Yani dizileri kopyalama derdinden de kurtulmuş olduk.

Projemizin hayata geçtiğini düşünelim ve 100 kullanıcının kayıt olduğunu varsayalım. Diziler ve listlerle bu durumu nasıl yönetirdik inceleyelim.

Dizileri ele alırsak `users` isminde boş bir dizi tanımlayalım.

```js
const users = [];
```

Sonrasında kayıt olan tüm kullanıcıları bu dizimizde tuttuğumuzu düşünelim.

```js

 const users = [user1, user2,user3, ... , user100];

```

Yarışmamız gerçekleşti ve ilk kullanıcının elendiğini gördük. Yapmamız gereken şey ilk kullanıcıyı dizimizden çıkarmak onun yerine ikinci kullanıcıyı koymak, ikinci kullanıcı yerinde de üçüncü kullanıcıyı koymak ve bu şekilde devam etmek.

JavaScript diline hakim olan arkadaşlar bu işlemin çok kolaylıkla `shift` methodu ile çözüleceğini söyleyecektir.

> Shift methodu JavaScript’te dizinin ilk elemanını silmemizi sağlar. Her nasıl pop methodu dizinin sonundan bir element siliyorsa shift methodu da başından siliyor. İncelemek için [bu linke](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) bakabilirsiniz

Tabii ki bu işlemi `shift` methodu ile kolaylıkla yapabiliriz. En azından bizim için yazması kolay olacaktır. Fakat acaba gerçekten performanslı bir şekilde bu durumu yönetmiş oluyor muyuz?

Bunu anlamak için JavaScript dilinde shift methodu nasıl çalışıyor bir bakmamız gerekiyor. TC39'un sitesine gidersek ve `shift` methodunun nasıl çalıştığına bakarsak (Bakmak isteyenler [bu linkten](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.shift) bakabilirler) aslında her bir silme işlemi için tüm arrayin yeniden indexlendiği yani mecburen tüm dizinin bir döngü ile dönülmesi durumu söz konusu. Yani bu maliyetli bir işlem. Biz tek bir satır kod yazsak dahi JavaScript işin mutfağında tüm dizinin üzerinden bir tur geçiyor :)

Aynı işlem dizinin ortasından bir element çıkardığımızda da geçerli çıkardığımız elementten sonraki kısım tekrar indexlenmeli. Aynı durum dizinin başına ya da ortasına bir element eklerken de geçerli. Dizi döngü ile dönülüp tekrar indexlenmeli. İşte tam bu yüzden bu tarz senaryolarımızın fazla olduğu durumlarda diziler en iyi seçenek olmayabilir. Unutmayalım ki bahsettiğimiz 100 kullanıcı bir anda 10000 hatta 100000 olabilir.

### Peki aynı oyunu listler ile nasıl yönetebiliriz?

Sözel olarak açıklamak gerekirse, her oyuncu objesi kendinden bir sonraki oyuncu objesi hangisi bilmesi gerekiyor singly linked listin doğası gereği. Fakat hiç bir obje kendisinin kaçıncı sırada olduğunu bilmiyor yani bir indexi yok. Ayrıca arraylerin aksine her bir oyuncu objesi “memory(Ram)”in farklı alanlarında yaşamını sürdürüyor. Yani “memory”de bir obje diğer objeden hemen sonraki alanda olması gerekmiyor.

Oyunumuza dönecek olursak. Kullanıcılarımız kayıt olduğunu ve biz bu kullanıcıları bu sefer dizide değil listde tutacağız. Peki bunu nasıl yaparız?

Öncelikle kullanıcımızı temsil edecek bir class’a ihtiyacımız var.

```js
class User {
  constructor(data) {
    this.name = data;
    this.nextUser = null;
  }
}
```

`data` kısmı user ile ilgili olabilecek her şey olabilir. Farklı değişkenler de eklenebilir. Bir user kayıt olduğunda yapılacak olan işlem şu şekilde olmalı.

```js
const newUser = new User(userData);
```

Bu kod bize yeni bir `user` yaratacaktır. Fakat tabii ki elimizde bir list bulunmuyor. Yalnızca bir `user` oluştrmuş olduk. Yani yarışmamıza ilk kullanıcımız kayıt olmuş oldu. Peki ikinci kullanıcımız kayıt olduğunda ne yapacağız. Yeni bir `user` oluşturmamız lazım, yukarıda nasıl yapıldığını öğrendik zaten fakat bu `user` lar birbirlerinden habersizler, nasıl bunları bir liste haline çevirebiliriz? Burada devreye `User` classında belirttiğimiz `nextUser` değişkeni devreye giriyor.

```js
const user1 = new User(userData);
const user2 = new User(userData);

user1.nextUser = user2;
```

Artık `user1.next` ile `user2` ye erişebileceğiz bu da demek oluyor ki iki `user`'ı birbirine bağlayabildik. Tahmin edebileceğiniz üzere `user3` geldiği zaman tekrar `new User(userData)` yaparak bir kullanıcı daha oluşturacağız ve bu her kullancı için bu şekilde devam edecek. Biraz külfetli ve sıkıcı bir iş değil mi? Ama daha önemlisi yönetilebilir değil. 10000 kullanıcımız olduğunu varsayarsak her seferinde bunu yapamayız. Peki ne yapabiliriz?

İşte tam bu noktada bizim yeni bir veri yapısına ihtiyacımız var. Bu veri yapısı da “Singly Linked List”.

```js

  const SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

```

`SinglyLinkedList` ismiyle bir class oluşturup üç adet değişken tanımlıyoruz.

`Head` değişkeni listimizin ilk elemanını yani ilk kullanıcımızı gösterecek. İlk kez kullanıcı ekleyeceğimiz zaman `this.head = user1` olacak gibi düşünebiliriz.

`Tail` değişkeni listemizin sonundaki kullanıcımızı gösterecek. Yani 100 kullanıcımız olduğu zaman `this.tail` değişkenini loglarsak eğer 100. kullanıcıyı görüntüleyeceğiz.

`Length` değişkeni ise bize listemizde kaç kullanıcı olduğunu gösteren değer olacak. Her kullanıcı eklediğimizde bu değer bir artacak, her kullanıcı elendiğinde bu değer bir azalacak.

### Peki bunlar nasıl olacak?

Az önceki gibi nextlerle ya da sürekli yeni bir `user` oluşturmakla uğraşmak istemiyoruz. Bizim yapmak istediğimiz bir liste oluşturup bu listeye ekleme ve çıkarma yapmak. Şu şekilde gösterebiliriz:

```js
// Yeni bir liste oluşturuyoruz. Kullanıcılarımızı bu listede tutacağız.
const list = new SinglyLinkedList();

// Listenin sonuna data eklemek için pushluyoruz.

list.push(2);
list.push(3);
list.push(4);
list.push(5);

// Listenin sonundan data çıkarmak için popluyoruz.

list.pop();
list.pop();

// Listenin başına data eklemek için unshiftluyoruz.

list.unshift(1);
list.unshift(0);

// Listenin başından data çıkarmak için shiftliyoruz.

list.shift();
```

Bizim finalde ulaşmak istediğimiz durum yukarıdaki kod gibi olmalı. Bu şekilde gayet rahat bir şekilde listemizi yönetebiliyor olacağız. Fark ettiyseniz method isimleri dizilerdekinin aynısı. Biz dizileri kullanırken de bu şekilde yazıyoruz ve arka planda neler döndüğünü bilmiyoruz. Aslında list kodunu yazdıktan sonra kullanıcak olan kullanıcı arkada neler döndüğünü bilmeyecek ya da bilmek zorunda olmayacak. Tek bilmesi gereken bazı durumlarda list kullanması daha performanslı sonuçlar çıkarabilecek olmasıdır. Daha performanslı diyip duruyorum ama neden performanslı olduğunu halâ açıklamış değilim biliyorum. Her şeyden önce olayın genelini iyi anlattığımdan emin olmak istiyorum. Performansa döneceğim :)

Tüm methodların nasıl çalıştığını bu yazımda açıklamayacağım. İncelemek isterseniz [buradaki linkten](https://github.com/OrhanOzkercin/Veri-Yapilari-ve-Algoritmalar/blob/master/list/Singly-Linked-List.js) nasıl implement ettiğimi görebilirsiniz.

Konumuza dönelim. Yukarıda belirttiğim gibi bir liste yapısı kurmaya çalışalım. Az önce `SinglyLinkedList` classımızı oluşturmuştuk zaten, şimdi ise `push` methodunu nasıl yazacağımıza bakalım. Bu şekilde kullanıcılarımızı listemize ekleyebiliriz.

```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    if (!data) return null;
    if (!this.head) {
      this.head = new User(data);
      this.tail = this.head;
    } else {
      this.tail.nextUser = new User(data);
      this.tail = this.tail.next;
    }
    this.length++;
    return this.tail;
  }
}
```

Öncelikle bu methodda daha fazla kontrol yapılabilir, muhtemelen yapılmalıdır. Fakat amacımız genel hatlarıyla olayı anlamak olduğu için yeterli olduğunu düşünüyorum.

Yukarıdaki kodu açıklamak gerekirse bu kodun şu şekilde çağırılacağını anlayabiliriz.

```js
// Yeni bir liste oluşturuyoruz. Kullanıcılarımızı bu listede tutacağız.
const users = new SinglyLinkedList();
// Listenin sonuna data eklemek için pushluyoruz.
users.push(userData);
```

Yani bir liste oluşturup bu listeye kullanıcılarımızı ekleyeceğiz.

`if (!data) return null;` kodu ile kullanıcının boş bir kullanıcı bilgisi göndermesini kontrol ediyorum. Bir kullanıcı boş bilgilerle kayıt olamamalı gibi düşünebiliriz.

`if (!this.head)` kontrolü ile listemizin `head`'i yani bir başlangıcı var mı diye kontrol ediyoruz. Yani listemize eklemeye çalıştığımız kullanıcı ilk kullanıcı mı bunu test ediyoruz. Eğer ilk kullanıcı ise `this.head = new User(data);` ile gönderdiğimiz data ile yeni bir user oluşturup bunu listemizin `head`'ine yani başlangıcına koymuş oluyoruz. Sonrasında ilk kullanıcımız olduğu için aynı zamanda listemizdeki son kullanıcı olduğundan `this.tail = this.head;` ile listemizin son elemanını da ilk elemanına atamış oluyoruz. Son olarak `this.length`'i bir arttırarak eklediğimiz kullanıcıyı “return” ediyoruz.

Umarım bu noktaya kadar her şey güzel gidiyordur. Farkındaysanız `user` oluşturma işlemini artık `SinglyLinkedList` classının içinde yapıyoruz. Yani `new User()` olayından son kullanıcıyı kurtarmış olduk 🥳.

Tamam artık listemizde bir adet kullanıcımız var. Şu şekilde düşünebiliriz.

```

user.head --> user1
user.tail --> user1
user.length --> 1

```

Yeni bir user ekleyeceğiz. İkinci kullanıcımız kayıt oldu. Kodumuz zaten artık belli `list.push(userData);`

Push metodumuzu hatırlayalım:

```js
function push(data) {
  if (!data) return null;
  if (!this.head) {
    this.head = new User(data);
    this.tail = this.head;
  } else {
    this.tail.nextUser = new User(data);
    this.tail = this.tail.next;
  }
  this.length++;
  return this.tail;
}
```

Artık `this.head` `null` olmadığı için else kısmına giriyoruz. Hemen farkedeceğimiz şey `this.tail.nextUser = new User(data)` olmalı. Yeni bir user oluşturuyoruz ve bunu listemizin son elemanının `next`'ine ekliyoruz. Sonrasında ise `this.tail = this.tail.next;` kodu ile listemizin son elemanını yeni eklediğimiz `user` yapıyoruz. Son olarak `this.length`'i bir arttırarak eklediğimiz kullanıcıyı “return” ediyoruz.

Görselleştirmek istersek yaptığımız işlem şu şekilde.

![gif1](gif1.gif)

Sona eklemeyi görmüş olduk. Sırada dizi örneğinde konuştuğumuz ilk kullanıcının elenme ihtimali var. Senaryomuz şu şekilde idi, ilk kullanıcımız eleniyor ve sonraki kullanıcıların sırası bir öne kayıyor. Yani ikinci kullanıcımız artık birinci kullanıcımız olmalı. Yani bizim `shift` methodu yazmamız gerekiyor. Yukarıda `shift` methodunun dizilerde nasıl yazıldığını gösteren bir link bırakmıştım, ona bakan arkadaşlar farkın ne olduğunu direkt anlayacaklardır.

İşte listlerde ilk yarışmacımızı silme ve diğer yarışmacıların sıralamarını değiştirme mehtodu:

```js
function shift() {
  if (!this.head) return null;
  const shiftedUser = this.head;
  this.head = this.head.next;
  this.length--;
  return shiftedUser;
}
```

Evet yukarıdaki kod hem sıralamayı değiştiriyor hem de ilk kullanıcıyı siliyor. Ne kadar kısa öyle değil mi? Çünkü aslında linked listte sıralama dediğimiz şey indexleme değil. Birbirine iplerle bağlı kutu gibi düşünün ilk kutuyu çıkarmak isterseniz yalnızca ipini kesmeniz yeterli. İkinci kutu birden bire birinci kutu olacaktır. Performansa geleceğim demiştim, işte geldim burdayım. Performans avantajını anlayanları haddim olmayarak kutluyorum. Hatırlıyorsanız dizilerde ilk elemanı çıkarmak için tüm dizinin üzerinden geçmemiz gerekiyordu. O(n) zaman karmaşıklığı vardı yani. Şuan tek yaptığımız işlem ipi kesmek (Ne demek istediğimi kod ile aşağıda anlatıyorum) yani zaman karmaşıklığı O(1) bir diğer değişle “constant time” bir başka şekilde ifade etmek istersek “best case” durumu :)

> O(n) kullanımı yabancı geldiyse. Buradaki ’n’ dizimizin boyutunu temsil ediyor. Sonuca ulaşmamız için tüm diziyi döngü ile dönmemiz gerektiği için ’n’ kadar zaman alacak diye sadeleştirebiliriz. O(n) notasyonu ile ilgili daha fazla bilgi almak isterseniz [bu linke](https://en.wikipedia.org/wiki/Big_O_notation#:~:text=Big%20O%20notation%20is%20a,a%20particular%20value%20or%20infinity.&text=In%20computer%20science%2C%20big%20O,as%20the%20input%20size%20grows.) bakabilirsiniz

Farkedebileceğiniz üzere dizilere nazaran çok daha iyi bir başarı yakaladık bahsettiğimiz senaryoda. Buradaki anahtar kelime bahsettiğimiz senaryo. Yani her durumda listler daha mantıklı tercih değiller bazı durumlarda daha iyiler, bazı durumlarda ise başka veri yapıları daha mantıklı. Her aracın avantajları ve dezavantajları mecvut. Her şeyde en iyi olan bir veri yapısı olsaydı diğerleri zaten oluşturulmazdı. Hepsi bazı durumlardaki ihtiyaçlardan ötürü oluşturulmuş algoritmalar. O sebepten birine diğerinden daha başarılı ya da daha iyi demek çok mantıklı bir ifade olmayacaktır.

Kodu bıraktım yukarı da yine başka şeylere daldım. Hemen kodumuzu açıklıyorum. Öncesinde hatırlamak için tekrar aşağıya yapıştırıyorum.

```js
function shift() {
  if (!this.head) return null;
  const shiftedUser = this.head;
  this.head = this.head.next;
  this.length--;
  return shiftedUser;
}
```

`if (!this.head) return null;` kodumuz eğer listemiz boş ise silinecek bir şey olmadığını söylüyor bize. `const shiftedUser = this.head;` kodu ile sileceğimiz kullanıcıyı “return” edebilmek için tutmamıza yarıyor. Sonrasında `this.head = this.head.next;` kodu ile ilk sıramızdaki kullanıcı artık ikinci sıraki kullanıcı olmuş oluyor. Son olarak `this.length` bir azaltıp sildiğimiz kullanıcıyı “return” ediyoruz.

> C, C++ gibi dillerden gelen arkadaşlar burda bir “memory leak” oluyor gibi düşünebilir fakat JavaScript sildiğimiz `user`ı hafızadan temizliyor. Kendimiz yapmamız gerekmiyor. Tabii ne zaman temizliyor orası muamma :) Bu sebepten ötürü C dili daha performanslı işlerde daha iyi sonuçlar veriyor diyebiliriz. Tabii bu sebeplerden biri yalnızca

Görselleştirmek istersek yaptığımız işlem şu şekilde.

![gif2](gif2.gif)

Bu yazımı burada noktalayacağım. Umarım faydalı bir yazı olmuştur. Amacım bilgilerimi paylaşıp benimle benzer şeyler öğrenmek isteyen kişilere olabildiğince fayda sağlamaya çalışmak. Eğer bir hatam varsa özür diliyorum. Her türlü eleştirinizi benimle paylaşabilirsiniz. Buraya kadar okuduğunuz için teşekkür ediyorum 🤗
