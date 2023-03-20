---
  title: "2021'de Angular İle Geliştirme Yapılır Mı?"
  date: "2021-04-13"
  author: "Orhan Özkerçin"
  cover: "cover.jpeg"
  excerpt: "Angular frameworkü ile geliştirme yapmak 2021 yılında hala mantıklı mı? Avantajları ve dezavantajları neler? Angular anlatıldığı gibi ölen, biten bir framework mü?"
  lang: "tr"
---

Herkese selamlar,

6 ayı geçkin süredir Angular ile geliştirme yapıyorum. Bir junior developer olarak fikirlerimi söyleyeceğim. Kesin yargılarla konuşmadan kendi perspektifimden Angular'ın durumunu sağladığı kolaylıkları ve zorluklarından bahsedeceğim.
Konuyla ilgili biriyseniz ve Junior bir developersanız başlığı yadırgamamışsınızdır diye düşünüyorum. Sektörün gözü React'dan başka bir şey görmüyor çünkü (React'ı ben de çok beğeniyorum, kızmayın 😛).

![Monsters holds React and angular logo](monsters.webp)

Ben de çalışmaya başlamadan önce React öğrenerek kendimi geliştirmeye başlamıştım. Çünkü, 'Youtube, Udemy, Github, Twitter', nereye girerseniz girin her yerde "React" görüyorsunuz ve bu durumda sizde doğal olarak oradan devam etmek istiyorsunuz. Bunda bir yanlış bir durum yok, benim yanlış olduğunu düşündüğüm şey şu. Aynı platformlarda ünlü geliştiriciler, takipçi sayısı çok olan kişilerden bazıları Angular'ı kötüleyen ve sürekli eksilerinin üzerine basan şeyler paylaşması.

Bunları yazarken Angular savunucusu olarak gözükmek istemem ama lanse edildiği gibi 'ölen,biten' bir framework değil onu söylemek isterim.

Her Angular yazısında ve videosunda gördüğünüz bir şeyi ben de âdeti bozmadan yazayım. "AngularJS" ile Angular bir birinden tamamen farklı iki framework. Detayları çokça kez yazıldı, ben değinmeyeceğim ki AngularJS ile ilgili çok bir bilgim de yok, isteyenler [buradan](https://stackify.com/angular-vs-angularjs-differences-between-angular-and-angularjs/) bakabilir. Bir de Angular 2,3,4,5… konusundan bahsedeyim, bu durum Angular üzerine yapışmış ve yeni başlayacak kişiler için akılda çok soru işareti bırakan bir durum. Genel olarak 2,3,4,5… versiyon numaralarının çok büyük bir önemi yok. Angular her 6 ayda bir sürüm güncellemesi çıkartıyor ve bu versiyon numaraları değişiyor. Bu sizin için çok büyük bir önem arz etmiyor. Angular stabil bir framework ve versiyon geçişlerinde çok köklü değişiklikler yapılmıyor. Bu algıyı yıkmak için Angular Community'si "It's just Angular" sloganını ortaya çıkardı zaten. Türkçe çevirisi "Sadece Angular".

Benim izlediğim bir kaç Youtube videosunda ayrıca [StackOverFlow anketi](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-web-frameworks-dreaded2) referans verilerek Angular'ın en sevilmeyen framework olduğundan bahsediliyor. Bu yanlış bilgilendirme olmakla birlikte yukarıda bahsettiğim AngularJS ve Angular farkından kaynaklanıyor. "Most Dreaded Web Framework" kategorisinde birinci olan framework **_AngularJS_**. Daha önce bahsettiğim gibi Angular ile bir ilişkisi yok(İlişkisi yok derken bir birinden tamamen farklı olan iki framework). AngularJS çıktığı dönemde çok büyük bir sükse yaratmış fakat günümüzdeki isteklere cevap veremeyen bir framework haline gelmiş durumda, öte yandan Angular bu konuda oldukça başarılı ve yenilikçi diyebilirim.

![Just Angular text](just-angular.webp)

Evet şuan Google kaç para verdi 'ulan' sana diyen arkadaşlar var ise demesinler lütfen 😅. Bence önemli olan şey frameworklerin isimlerinden bağımsız olarak hangi 'tool'un neleri güçlü bunları öğrenebilmek ve doğru bilgi ve doğru veri ile hareket etmek. Çok ufak sinirleri yatıştırdıktan sonra Angular'ı temize çıkarmaya devam ediyorum hemen 😂

Yukarıda bir kaç konuyu açıklığa kavuşturduktan sonra gelelim benim Angular ile tecrübelerime. Bunları da başlıklar altında toparlayarak yazacağım.

## 1 - Korkma çoğuyla işin olmayacak!

Bir junior olarak ilk kez Angular çalışmaya başladığımda herkesin takip ettiği adımları takip ettim ve bir Angular projesi kurmayı başardım. Kurduktan sonra projeyi açınca karşınıza gelen ekran tam olarak şöyle:

![Angular file structure](file-structure.webp)

> Kurulumu Angular CLI ile kurduğunuzu varsayıyorum, ben başka bir yöntem denemedim.

Tabii eğer sektörde yeni iseniz, profesyonel olarak büyük projelere dahil olmaya daha başlamadıysanız gördüğünüz şey sizi biraz korkutuyor, beni de korkuttu. Farkettiğiniz üzere envai çeşit dosya ve uzantı var. Size videolarda ve makalelerde söylenecek olan ve bana da söylenen şey şu oldu **"Korkma çoğuyla işin olmayacak!"**.

Peki bu söylem ne kadar doğru? İngilizce'de şöyle bir söylem var, "You are not gonna need it until you need it". Türkçe'ye çevirince "İhtiyacın olana kadar ihtiyacın yok" gibi bir şey oluyor.

Demem o ki; bu söylem bi noktaya kadar doğru, Angular CLI'ı size tüm ayarları yapmış bir şekilde projeyi oluşturuyor, sizin öğrenme aşamasında iken buradaki "ayar" dosyalarına çok bulaşmanız gerekmiyor ("until you need to"). Gerçekten de uzunca bir süre çoğu ile bir işiniz olmuyor. İşiniz olduğunu anladığınız zaman zaten muhtemelen belirli bir seviyeyi geçmiş oluyorsunuz.

## 2- Routing, HTTPClient, DI, Module, Service, Observable, Pipe, Directive, Resolver, Interceptor, Guards …

Angular kolay değil! "Learning Curve"ü dik gidiyor, bu söylemleri duymuşuzdur. Tamamı doğru :) Angular bir çok yenilikle geliyor, kendine has özellikle geliyor. Öğrenmesi sindirmesi zaman alan kafa karıştırabilecek özellikleri var. Fakat ben olaya şöyle bakıyorum; "Scope, Hoisting, Closure, Context" gibi özellikler de bir hayli kafa karıştırıcı ve anlaması zor konseptler. Bu özelliklere sahip diye JavaScript'e kötü demiyoruz, JavaScript sorunlara bu konsept ve anlayışlarla çözüm bulmuş diyoruz ve hepimiz(!) JavaScript'e bayılıyoruz. En fazla eleştirilen dillerden birisi olmasıyla birlikte en çok kullanılan dil olmasının altında yatan sebep sağladığı kolaylıklar çıkardığı zorluklardan daha ağır basması.

```js
null == 0; // false
null > 0; // false
null >= 0; // true
```

Başlıkta gördüğünüz her şey Angular'ın sunduğu özelliklerden bazıları. Ben tamamında süperim diyemem ama tamamıyla bi şeyler yaptım. Bayağı karmaşık konseptler, anlaması güç noktaları var. Ama bunlarla boğulmak zorunda değilsiniz hemen. Resolverlar hakkında öğrendiklerimi geçen aya kadar bilmiyordum. React ve Vueöğrenmesi Angular'a nazaran daha rahat olduğunu söylüyoruz, ki öyle, fakat işin içine "Best practices, HTTP yönetimi, Routing yönetimi, State yönetimi" gibi konular girince onlarında karmaşıklaştığını göreceksiniz.

Burada değinmek istediğim nokta şu; her şeyi her an biliyor olamayız. Yine çok alışılagelmiş bir söylem olacak fakat Angular size ihtiyacınız olan her şeyi(!) sağlıyor. Bunların tamamını hemen bilmeniz gerekmiyor.

## 3- TypeScript

Yukarıdaki başlıkta yazılabilirdi TypeScript. Bu konuya iki şekilde bakılabilir. Ben kendi bakış açımdan açıklayacağım. Angular'ın zor olmasından bahsedilirken TypeScript öğrenmek durumunda olmaktan da bahsediliyor, benim için en büyük avantajlardan biri oldu diyebilirim.

Türkiye'de üniversiteler genellikle C#, Java gibi diller ile eğitim verdiği için bizler type belirlemeye aşina oluyoruz ve Javascript bu bağlamda biraz garip gelebiliyor. TypeScript bu alışkanlığımızı devam ettirebileceğimiz, bunun yanında Interfacekullanımı gibi ek özelliklerle kodumuzu daha güvenli ve yazması kolay bir hale getiriyor.

Şahsi kanaatim eğer bir ekip çalışması varsa ortada TypeScript bir hayli yardımcı oluyor. IDE'nin size yardım etmesini kolaylaştırıyor ve "doğru yazdım" hissiyatı oluşturuyor.

Ben Angular'ın TypeScript bağımlılığını 100% pozitif bir durum olduğunu düşünüyorum. JavaScript bilen birinin TypeScript öğrenme konusunda hiç sorun yaşamayacağını düşünüyorum.

## 4- RxJS

RxJS Angular CLI kurulumu yaparsanız eğer varsayılan olarak kurulan bir kütüphane. Angular'a özel bir kütüphane değil, fakat Angular ile müthiş çalıştığını söyleyebilirim. `Reactive Programming` yaklaşımını sağlayan, `observer pattern`'i kullanan ve bir birinden yetenekli operatörleri olan bir kütüphane, bence mutlaka bakmalısınız en azından neden böyle bir yaklaşım var bi' incelemelisiniz. [Buradan](https://reactivex.io/) resmi sitesine ulaşabilir, [buradan](https://medium.com/@kevalpatel2106/what-is-reactive-programming-da37c1611382) da Reactive Programming nedir sorusuna yanıt bulabilirsiniz.

RxJS kütüphanesi daha önce `observer pattern` ile uğraşmamış kişiler için(Benim gibi) zor gelebilir. Fakat `state management` yapabildiğimiz, datayı çok kolay bir şekilde manipüle edebildiğimiz çok yetenekli bir kütüphane olduğunu söyleyebilirim.

## 5- Düzen, Nizam

Angular'ın hem sevilen hem de hiç sevilmeyen bir özelliği olan neyi nerede yapacağınızı söyleyen bir durumu var. Şöyle ki;

Size klasörlerinizi nasıl isimlendireceğinizi, logic'iğinizi nereye koyacağınızı, datanızı nasıl tutacağınızı ve nerede tutacağınızı söyleyen kendine özgü bir düzeni var. [MVC pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ile kurguladığı bir yapısı var. Bu durumun benim üzerimde olumsuz bir etkisi olmadı fakat esnekliğin az olduğu eleştirileri de bulunuyor. Bunun iyi ya da kötü olduğunu söyleyecek tecrübe de değilim, fakat ben `Interfaceler` ile modelimi belirleyip, servislerde logic'iğimi yazıp componentde de dataları gösterme olayına alıştım, seviyorum diyebilirim.

## Peki Angular bu kadar 'müthiş' niye grafikler öyle demiyor?

Harika bir soru, öyle değil mi? Ben ilk Angular yazacağımı öğrendiğimde baya üzülmüştüm. Öyle zannediyordum ki artık kimse Angular yazmıyor. Fakat grafikler her ne kadar Angular için React kadar yüksek olmasa da çok büyük kitleler tarafından kullanılan bir framework. Ayrıca büyük bir topluluk desteği var aynı React ve Vue gibi (Vue'yi hatırladığım iyi oldu 😅).

Hala grafiklerin neden Angular için çok yukarı yönlü olmadığını söylemedim, çünkü bilmiyorum 🙈

![Angular ecosytem](angular-products.webp)

Her ne kadar Angular'da olan şeylerin olmasının çok mantıklı sebepleri olduğunu ve olmasının aslında iyi bir şey olduğunu söylesem de, Angular diğer frameworklere göre biraz daha karmaşık ve zorlayıcı olabiliyor. Bir çok farklı konuda çözüm üretebiliyor olması, baktığınız açıya göre olumsuz bir durum olabiliyor.

Ayrıca React'e göre şuan popülaritesi daha az olduğu için kütüphane konusunda React kadar zengin olmayabiliyor benim gözlemlerime göre. Ama aynı zamanda Angular takımının geliştirdiği kütüphaneler sayesinde diğer kütüphanelere olan bağımlılığınız bir hayli azalıyor.

Uzun lafın kısası ben Angular ile ilgili çok büyük ön yargılarla başladığım serüvenime iyi hislerle devam ediyorum. Başarısını kanıtlayan bu frameworkle ilgili ben de kendi fikirlerimi söylemek istedim. Yazdığım şeylerde varsa bir hatam lütfen beni uyarın, mümkün oldukça kendi fikirlerimi ve neler düşündüğümü yazmaya çalıştım. Umarım okuması keyifli bir yazı olmuştur sizin için.

Bu arada Angular ile ilgili geliştirme yapmak isteyip ve bu konuda bir destek olsa fena olmaz diyen herkese NgTurkey topluluğunu hatırlatmak istiyorum. Bu toplulukta Angular konusunda çok başarılı kişiler yardım almak isteyen herkese yardımcı oluyorlar.

**NgTurkey İletişim:**

[Github](https://github.com/ng-turkey)
[Youtube](https://www.youtube.com/channel/UCmJHGvy7eedk9QAWX8Kootg)
[Twitter](https://twitter.com/ngturkiye)
[Kommunity](https://kommunity.com/ngturkey)
