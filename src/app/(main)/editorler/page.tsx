import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Editörler - TFSF Memleketimden Görsel Hikayeler",
}

export default function Page() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative text-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text">
              BİR ANKA KUŞU HİKAYESİ
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8 text-lg leading-7 md:text-xl md:leading-8">
        <Section>
          <Paragraph>“Hayattan fotoğraflı hikayeler / fotoröportajlar” yeni bir anlatı biçimi olarak Avrupa’da 1928’de VU dergisinin yayınlanmasıyla birlikte ortaya çıktı; 1936’da ABD’de yayınlanmaya başlayan LİFE dergisiyle gelişti.</Paragraph>
          <Paragraph>O sırada Dünya en çalkantılı dönemlerinden birini daha yaşıyordu. Hayatlar değişirken, toplumsal düzenler sarsılırken, savaşlar olanca acıları yaşatır, sınırlar yeniden çizilirken, fotoröportajlar olan bitenleri göstererek anlatıyordu. Belgesel hikayeciler, insan hallerinin görüntülerini fotoröportajlarla evlerin içine taşıyordu. 1947’de kurulan Magnum Ajansı bu ekolün usta fotoğrafçılarını yetiştiren ocak oldu.</Paragraph>
          <Paragraph>Türkiye’de 1954’te Life Dergisi’nin adını örnek alarak yayına başlayan Hayat’ın mecmuasının güçlü bir fotoğrafçı kadrosu vardı, matbaası kaliteli fotoğraflar basabilecek ileri tekniğe sahipti. Ancak yayın hayatı boyunca dünyada ve memlekette olup bitenlerin sadece görünen yanlarıyla ilgilendi, “spot haber” ve “cemiyet” fotoğrafları yayınlamakla yetindi. Batıdaki benzerlerinin yaptığı gibi, ele aldığı konuya derinlemesine bakabilen, meselenin görsel analizini yapabilen ve fotoğrafçının tanıklığını yaratıcı bir fotografik hikaye haline getirebilen metinli haberleri izleyiciye ulaştıran bir gelenek yaratamadı.</Paragraph>
          <Paragraph>Life Dergisi, ilk sayısındaki sunuş yazısına “Hayatı ve Dünyayı görmek için.....” diye başlamıştı. 1972’de kapanacak Life gibi birçok dergi de popüler TV yayınlarının  rekabetine direnemeyecekti.</Paragraph>
          <Paragraph>Avrupa ve ABD’de 1928 – 1972 aralığında dünyaya tanıklık ederek hayattan fotoğraflı hikayeler anlatan gelenek, dergiler sayesinde var olmuş, önemli bir toplumsal işlev gerçekleştirmiş ve ardında harikulade yaşanmışlıklar, dürüst hikayeler üreten sorumlu fotoğrafçılar, ibretlik olaylar, efsaneler, muammalar, menkıbeler bırakarak hayatı terk etmişti. Geride kalan külleri sıcaklığını hiç yitirmeyecek, o sayede yeniden doğuşun enerjisini içinde taşıyacaktı.</Paragraph>
        </Section>
        <Divider />
        <Section>
          <Paragraph>Türkiye’de 70’erin ortaları fotoğrafçılığa duyulan ilginin artmaya başladığı yıllardır. 80’lere yaklaşırken, 1953 doğumlu “İstanbullu” İFSAK’ın yanına “Anadolulu” yeni dernekler eklenir. (Normal şartlarda birer hobi kuruluşu olarak yenikentli orta sınıfların boş vakitlerini faydalı biçimde değerlendirmeleri beklenen fotoğraf dernekleri, giderek Türkiye’de fotoğrafçılığın teorik ve pratik alanlarda görünür olan hemen tüm faaliyetlerini üstlenmeye başlayacaklardı.)</Paragraph>
          <Paragraph>1960’larda kitleselleşen kente göçle birlikte kurulan yeni hayatlar 70’lerde görünür hale gelmişti. Şehirler hızlı bir değişim içindeydi. Bir tarafta canlı bir sosyal ortam ve fikir kaynaşması vardı, diğer tarafta sert çatışmalar toplumsal travmalara sebep oluyordu. Bu arada sanat yükselen değerler arasındaydı. Birçok genç fotoğrafçı objektifini “hayata” çevirmekte istekliydi.</Paragraph>
          <Paragraph>Ancak bu isteklilik el yordamıyla sürdürülebilen bir meşgale olmaktan öteye gidemedi. Batıda yetmişlere gelene kadar 40 altın yıl yaşayan “hayattan fotoğraflı hikayeler” geleneği, Türkiye’nin yüksek duvarlarından içeri sızamadığı için bu anlatma tekniğinin etik, estetik ve metodolojik bilgisine dönem fotoğrafçıları sahip olamadı.</Paragraph>
        </Section>
        <Divider />
        <Section>
          <Paragraph>2000’lerin başında batı dünyasında takvimler yeni bin yılı gösterirken dijital fotoğraf makineleri hızla gelişiyor, yaygınlaşıyordu. İnternet üstünden görüntü aktarımı kolaylaşmıştı. Avrupa ve ABD’deki fotoröportajcılar internet ortamını hikaye paylaşabilecekleri yeni bir mecra olarak değerlendirmeye başlamışlardı. Foto röportaj, kendi küllerinden yeniden doğmuştu. Görsel hikayeciler, Zümrüdü Anka misali Dünya’nın dört bucağından tanıklıklar aktarıyor, kendi yaşam alanlarından anlatılarla herkese ulaşabilme imkanı buluyorlardı.</Paragraph>
          <Paragraph>Türkiye’de 90’ların sonunda haftalık dergiler sayfalarında hayattan fotoğraflı hikayelere yer vermeye başladı, 2000’lere girerken 50-60 yıllık gecikmeyle de olsa hızlı yaşanacak verimli bir süreç başlamıştı. Ankara’da sempozyum toplanıyor, İstanbul’da bir vakıf, bir ajans ve birçok platform kuruluyor, uzun süreli fotoröportaj seminerleri düzenleniyor, fotoröportaj dergisi çıkıyor, birkaç internet sitesi birden açılıyor, dört yıl üst üste belgesel fotoğraf günleri düzenleniyor, fotoğrafçılar yaptıkları sunumlarla hayata dair hikayeler anlatıyorlardı.</Paragraph>
          <Paragraph>Dünyada fotoröportajlar altın yıllarını yaşarken Türkiye’de bu işin asıl mecrası olan basın uzak kalmıştı. O dönemde fotoğraf meraklılarının kurduğu derneklerin sayısı ise bir elin parmaklarını bile geçmiyordu. Anka kuşunun bu alemde yeniden kanat çırpmaya başladığı, görsel hikayelerin atmosferde dolaşıp durduğu yıllarda ise Türkiye’deki derneklerin sayısı yüze merdiven dayamış, bir de Federasyon kurulmuştu.</Paragraph>
        </Section>
        <Divider />
        <Section>
          <Paragraph>TFSF, fotoğrafla hikaye anlatmanın temel metodolojisini üye derneklerde çalışan fotoğrafçılarla paylaşmak için Mart 2018’de MGH – Memleketimden Görsel Hikayeler çalışmasını başlattı. Fotoröportaj metodunu esas alan bu yaygın eğitim çalışmasını planlarken memleket hikayelerinden birçok örnek, Avrupalı, Asyalı ve Amerikalı deneyimli fotoğrafçılar - editörler ve eğitimcilerle birlikte yaptığımız seminer -atölyelerden edindiğimiz bilgiler ile kendi deneyimlerimiz ve çıkarımlarımız vardı heybemizde.</Paragraph>
          <Paragraph>Memleketimden Görsel Hikayeler – MGH, birlikte öğrenme yöntemiyle gerçekleşen ve hazırlık aşaması altı ay uygulaması iki yıl süren bir yaygın eğitim çalışması oldu. Şubat 2018’de, 32 dernekten, 404 fotoğrafçı ve 227 hikaye kanavası (gerekçelendirilmiş hikaye taslağı/anlatının iskeleti/fotoğrafçının yol haritası) ile başladığımız çalışmada her fotoğrafçıyla bölgelerine buluşarak iki  kez yüz yüze görüştük. Bu görüşmelerde hikayedeki fikrin olgunlaşması ve görsel dile aktarılabilir hale gelmesi için önerilerimizi paylaştık. Her fotoğrafçıyla 6 haftada bir yazışarak çektikleri yeni fotoğrafları yorumladık, hikayelerin görsel dile aktarımını tartıştık. Çalışmayı 2019’un son ayında tamamladık.</Paragraph>
          <Paragraph>MGH’nin her aşamasında sonuçtan ziyade süreci önemsedik. Fotoğrafçı arkadaşlarımıza önce mentorluk, sonra editörlük yapmaya çalıştık. MGH’yi sadece birlikte öğrenme faaliyeti olarak değerlendirmedik, aynı zamanda fotoröportaj etiğine özen gösteren, içten, dürüst ve sorumluluk taşıyan bir memleket hikayeleri toplamı yaratmayı da hedefledik.</Paragraph>
          <Paragraph>Size sunduğumuz 86 memleket hikayesini 25 dernekten 136 fotoğrafçı arkadaşlarımızla birlikte hazırladık. TFSF’nin MGH projesi, hacmi, süresi, yöntemi ve sonuçlarıyla muhtemelen dünyada pek fazla örneği olmayan kapsamlı bir belgesel hikayecilik eğitim çalışmasıdır. Bu çalışmada editörler olarak herhangi bir eleme yapmadık. Bir görsel hikaye ortaya çıkarabilmek için gerekli olan her bir aşamayı titizlikle gerçekleştirmeye ve ortak çalışma takvimine hakkaniyetle uymaya çalıştık.</Paragraph>
        </Section>
        <Divider />
        <Section>
          <Paragraph>Dünyada görsel hikayecilik, MGH çalışmasında uyguladığımız klasik fotoröportaj yönteminin yanı sıra son yıllarda yaratıcı denemelere de açıldı. Fotoğraflar, video ve ses kaydıyla birlikte aynı ortamda taşınabilir olduktan sonra multimedya tekniği hikayeciliğe yeni bir boyut kattı. Ülkemizde fotoğrafçılar klasik yöntemle de, deneysel uygulamalarla da, disiplinler arası denemelerle de hayata dair hikayelerini anlatmaya devam ediyorlar. Hepsinin yollarının açık ve uzun olmasını diliyoruz</Paragraph>
          <Paragraph>MGH çalışmasını gerçekleştirebilmemiz için bize ortam sağlayan TFSF’nin 2018-2020 dönem yönetimine ve şimdiki yönetimine; çalışma boyunca fotoğrafçı arkadaşlarımızı yerelden destekleyen dernek temsilcilerine ve asıl bu uzun, zahmetli süreci bize güvenerek tamamlayan, anlattıkları görsel hikayelerle MGH’yi yaratan fotoğrafçı arkadaşlarımıza teşekkür ederiz.</Paragraph>
        </Section>
        <h4 className="font-semibold mt-8 text-end">Özcan Yurdalan, Yusuf Aslan, Aykan Özener</h4>

        {/* <hr className="my-14 border-gray-300" /> */}

        <div className="mt-32 shadow-xs bg-white px-4 py-4 md:px-8 md:py-8 rounded-xl">
          <h4 className="font-semibold text-2xl mb-4">Aykan ÖZENER</h4>
          <div className="flex w-full gap-10 flex-col-reverse md:flex-row mt-10 md:mt-0">
            <div className="grow">
              <p className="mt-2">1964 Balıkesir doğumlu Aykan Özener, Selçuk Üniversitesi Klasik Arkeoloji mezunudur. Yüksek Lisansını “Arkeoloji Biliminde Fotoğraf Teknikleri” adlı teziyle tamamlayan Özener, fotoğraf çalışmalarına 1983 yılında başladı.</p>
              <p className="mt-2">1987 yılında AFSAD’a (ANKARA FOTOĞRAF SANATÇILARI DERNEĞİ) üye olmasıyla fotoğrafta yeni arayışlar içerisine girmiştir ve 1987-1995 yılları arasında AFSAD çatısı altında sürdürdüğü çalışmalarına bağımsız olarak devam etmektedir. Kişisel sergiler açtı.</p>
              <p className="mt-2">Fotoğrafları, yazıları, kültür ve sanat dergilerinde yayınlandı.</p>
              <p className="mt-2">Seminerlere katıldı.</p>
              <p className="mt-2">Çanakkale 1.2.3.4.5. Fotoğraf Festivalleri’ni düzenledi.</p>
              <p className="mt-2">Çanakkale Onsekiz Mart Üniversitesi’n de yirmi yıl fotoğraf üzerine dersler verdi.</p>
              <p className="mt-2">2018-2019  yılları arasında TFSF(Türk Fotoğraf Sanatı Fed.) adına katılımcı derneklerle Özcan Yurdalan ve Yusuf Arslan ile birlikte editörlük yaptı.</p>
              <p className="mt-2">Aynı zamanda Çanakkale’de kurduğu Pan Görsel Kültür Derneği’nin yönetim kurulu başkanıdır.</p>
              <p className="mt-2">Aktuel Arkeoloji Dergisi’nin fotoğraf editörlüğünü yürütmektedir.</p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
                <img src="https://mgh.tfsf.org.tr/img/aykan_ozener.jpg" width="400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 shadow-xs bg-white px-4 py-4 md:px-8 md:py-8 rounded-xl">
          <h4 className="font-semibold text-2xl mb-4">Özcan YURDALAN</h4>
          <div className="flex w-full gap-10 flex-col-reverse md:flex-row mt-10 md:mt-0">
            <div className="grow">
              <p className="mt-2">1955 Yılında Adana’da doğdu.</p>
              <p className="mt-2">AFSAD, Fotoğraf Vakfı ve Nar Photos kurucuları arasında yer aldı.</p>
              <p className="mt-2">Yayınlanmış sekiz seyahatnamesi, bir seyahat denemeleri kitabı, bir belgesel fotoğraf ve fotoröportaj metodolojisi kitabı, bir de Gezi Direnişini konu alan fotoğraf/metin derlemesi bulunuyor.</p>
              <p className="mt-2">Çok sayıda ortak kitapta fotoğrafları ve yazıları yayınlandı. Karma sergilere katıldı, projeksiyon sunumlar yaptı. Çeşitli kentlerde belgesel fotoğraf ve gezi yazarlığı seminerleri düzenliyor, çocuklarla fotoğraf atölyelerine katılıyor, fotoğraf kuramı ve seyahat kültürü üstüne çalışıyor.</p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
                <img src="https://mgh.tfsf.org.tr/img/ozcanyurdalan.jpg" width="400" className="-translate-y-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 shadow-xs bg-white px-4 py-4 md:px-8 md:py-8 rounded-xl">
          <h4 className="font-semibold text-2xl mb-4">Yusuf ASLAN</h4>
          <div className="flex w-full gap-10 flex-col-reverse md:flex-row mt-10 md:mt-0">
            <div className="grow">
              <p className="mt-2">Öğretmen. İlk ve orta öğrenimini Sivas’ta, Öğretmen okulunu Savaştepe’de tamamladı. Gazetecilik ve Halkla İlişkiler okudu.</p>
              <p className="mt-2">Sivas, Aydın ve Almanya ’da öğretmen olarak çalıştı.</p>
              <p className="mt-2">Kuşadası Fotoğraf ve Sinema Sanatı Derneği’nin (KUFSAD) yönetim kurullarında yer aldı ve bu süreçte gerçekleştirilen Uluslararası Kuşadası Fotoğraf Günleri’nin düzenleyicileri arasında yer aldı.</p>
              <p className="mt-2">Biri Der Spigel’in kapağında yer almak üzere, batı ülkeleri basınında haber fotoğrafları yayınlandı.</p>
              <p className="mt-2">Hollanda Haber Ajansı’nın Avrupa’nın mülteciler karşısındaki tutumunu insan hikâyeleri üzerinden eleştiren, “Avrupa: Kale Kapısı” projesinde çalıştı.</p>
              <p className="mt-2">Ulusal ve uluslararası alanda yapılan fotoğraf festivallerinde sergi ve gösterileriyle yer aldı.</p>
              <p className="mt-2">Dergi ve kitaplarda fotoğrafları yayınlandı.</p>
              <p className="mt-2">Çocuklarla yapılan fotoğraf atölyelerinde çalıştı.</p>
              <p className="mt-2">TFSF’nin 2018-2019 yıllarında gerçekleştirdiği MGH-(Memleketimden Görsel Hikayeler) adlı  belgesel fotoğraf eğitim çalışmasının düzenleyicileri arasında yer aldı.</p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
                <img src="https://mgh.tfsf.org.tr/img/yusufaslan.jpg" width="400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 MGH TFSF - Tüm hakları saklıdır
          </p>
        </div>
      </footer>
    </div>
  )
}

function Divider() {
  return (
    <div className="flex justify-center pb-0.5 pt-6 mb-3.5 mt-5 md:mt-8">
      <span className="w-[3px] h-[3px] bg-black mr-5 inline-block" />
      <span className="w-[3px] h-[3px] bg-black mr-5 inline-block" />
      <span className="w-[3px] h-[3px] bg-black mr-5 inline-block" />
    </div>
  )
}

function Section({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col [&>p]:mt-6 [&>p]:md:mt-10">
      {children}
    </div>
  )
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="mt-7 md:mt-10">
      {children}
    </p>
  )
}
