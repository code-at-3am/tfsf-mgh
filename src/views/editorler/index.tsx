import { Lang } from "@/common/types"
import { ReactNode } from "react"

interface EditorlerProps {
  lang: Lang
}

export default function Editorler({ lang }: EditorlerProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative text-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text">
              {lang == 'tr' && 'BİR ANKA KUŞU HİKAYESİ'}
              {lang == 'en' && 'A PHOENIX STORY'}
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-8 text-lg leading-7 md:text-xl md:leading-8">
        <Content lang={lang} />
        <Editor1 lang={lang} />
        <Editor2 lang={lang} />
        <Editor3 lang={lang} />
      </div>
    </div>
  )
}

function Content({ lang }: { lang: Lang }) {
  if (lang == 'tr') {
    return (
      <>
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
      </>
    )
  }

  if (lang == 'en') {
    return (
      <>
        <Section>
          <Paragraph>“Photo story / photo interviews from life” emerged as a new form of narration with the publication of the VU magazine in Europe in 1928; and developed in 1936 with the publication LIFE magazine in the USA.</Paragraph>
          <Paragraph>At that time, the world was experiencing one of its turbulent times. As lives were changing, social orders were being shaken, wars were causing much pain, borders were being redrawn, and photo-interviews were showing what was happening. Documentary storytellers carried images of human condition into houses with photo interviews. Magnum Photos, founded in 1947, was the leading school to train master photographers of this field.</Paragraph>
          <Paragraph>In Turkey, a magazine was established in 1954, copying the name of Life magazine, it was called "Hayat" (meaning life in Turkish) and employed very good photographers in its staff; its printing house was equipped with advanced techniques that can publish quality photos. However, as long as it was actively publishing, it was interested only in the apparent aspects of what was happening in the world and in the country, it was content to publish “spot news” and “celebrity” photographs. It could not create a tradition that brings its audience together with textual news that deeply analyze the topic it is dealing with, examine how the issue seems to be and turn the photographer's observance into a creative photographic story, as its western counterparts.</Paragraph>
          <Paragraph>Life Magazine started its introduction in the first issue as "To see the Life and the World ..." Many magazines such as Life, which closed down in 1972, could not resist the competition of popular TV broadcasts.</Paragraph>
          <Paragraph>The tradition that tells photographs from life by witnessing the world in Europe and the USA, between 1928 and 1972, has existed thanks to such magazines. This tradition has realized an important social function, and left marvelous experiences, honest stories, productive and responsible photographers, exemplary events, legends, puzzles, and stories behind. The remaining ashes would never lose their heat, so they would carry the energy of rebirth in themselves.</Paragraph>
        </Section>
        <Divider />
        <Section>
          <Paragraph>In Turkey mid-1970s are the years in which interest in photography began to increase. Approaching the ‘80s, new "Anatolian" associations were established along with the "Istanbul based" IFSAK, launched in 1953. (Normally, photography associations are expected to act like hobby providers for the urban middle class to make fruitful use of their spare time; however, form in the classroom spare time assessment of the expected, they gradually began to take the responsibility of almost all the activities that appear in the theoretical and practical fields of photography in Turkey.)</Paragraph>
          <Paragraph>The new lives established with the immigration to the city, which became massive in the 1960s, became visible in the 70s. Cities were in a rapid change. On one hand, there was a lively social environment and fusion of ideas; on the other hand, violent conflicts were causing social traumas. Meanwhile, art was among the rising values. Many young photographers were eager to turn their objective glasses towards "life".</Paragraph>
          <Paragraph>However, this willingness did not go beyond individual efforts. "Photo stories from life" tradition, having 40 golden years till the ‘70s in the West, could not pass through Turkey's high walls. So the photographers of that period could not have the ethics of these techniques or their aesthetic or methodological knowledge.</Paragraph>
        </Section>
        <Divider />
        <Section>
          <Paragraph>In the western world, in the early 2000s, when the calendars showed the new millennium, digital cameras were developing and becoming widespread. Image transfer was easier via Internet. Photojournalists in Europe and the USA started to consider the Internet as a new medium to share stories. The photo interview was reborn from its ashes. Visual storytellers were conveying what they witness from all corners of the world, like a phoenix, and had the opportunity to reach everyone with narratives from their own living spaces.</Paragraph>
          <Paragraph>In the late '90s weekly magazines in Turkey began to spare space for stories with photos from life, albeit after a delay of 50-60 years, an efficient process began on the edge of the 2000s. Symposiums were gathered in Ankara; a foundation, an agency and many platforms were established in Istanbul, long-term photo-interview seminars were organized, a photo-interview magazine was published, several websites were launched at the same time, documentary photography days were organized for four consecutive years, photographers were presenting stories about life with their presentations.</Paragraph>
          <Paragraph>While photo-interviews were having their golden years in the world, in Turkey, the press that is considered to be the main media of this work stayed away. The number of associations founded by photography enthusiasts at that time was very few. In this realm where the phoenix starts flapping its wings again, when visual stories were wandering freely in the atmosphere the number of associations was more than a hundred and a federation was established in Turkey.</Paragraph>
        </Section>
        <Divider />
        <Section>
          <Paragraph>"MGH - Memleketimden Görsel Hikayeler" (Visual Stories from My Hometown) organized by Türkiye Fotoğraf Sanatı Federasyonu (Turkey Photography Art Federation) in 2018-2019. The project was carried out with almost two hundred photographers from all around Turkey.</Paragraph>
          <Paragraph>That federation, namely Türkiye Fotoğraf Sanatı Federasyonu (TFSF - Turkey Photography Art Federation) launched "MGH - Memleketimden Görsel Hikayeler" (Visual Stories from My Hometown) project to share the basic methodology of storytelling through photography with photographers working in member associations in March 2018.</Paragraph>
          <Paragraph>While planning this non-formal education based on the photo-interview method, we had in mind to use many examples of hometown stories, the knowledge we get from the seminars and workshops with European, Asian and American experienced photographers, editors, and educators, along with our own experiences.</Paragraph>
          <Paragraph>Visual Stories from My Hometown (MGH) was a non-formal education that took place through co-learning and its preparation phase lasted two months. In this work we started with 32 associations, 404 photographers, and 227 story canvases (a justified story draft / basics of the story / photographer's course of action) in February 2018, we had had two face-to-face meeting with each of the photographers in their region. In these meetings, we shared our suggestions for the idea in the story to mature and become transferable. We corresponded with each photographer once in every 6 weeks to interpret the new photos they took, and discussed the conveyance of stories to the visual language. We completed the study in the last month of 2019.</Paragraph>
          <Paragraph>At every stage of MGH, we considered the process rather than the result. We tried to be mentors and then editors for our photographer friends. We did not only consider MGH as a learning activity together, but also aimed to create a collection of hometown stories that care about the ethics of photo-interview and is sincere, honest and responsible.</Paragraph>
          <Paragraph>We present you the 86 hometown stories we prepared together with our 136 photographer friends from 25 associations. TFSF's MGH project is a comprehensive documentary storytelling training that probably does not have many examples in the world with its volume, duration, method, and results. In this study, we did not make any screenings as editors. We tried to meticulously carry out each step necessary to present a visual story and to comply with the joint calendar.</Paragraph>
        </Section>
        <Divider />
        <Section>
          <Paragraph>Visual storytelling in the world has been opened to creative experiments in recent years as well as the classical photo-interview method we applied in the MGH study. After photos had become portable with videos and sound recordings in the same way, the multimedia technique added a new dimension to storytelling. In our country, photographers continue to tell their stories about life through classical methods, experimental practices, and interdisciplinary experiments. We wish them all success and sustainability on their journey.</Paragraph>
          <Paragraph>We thank to 2018-2020 period management and the current management of TFSF, for providing us an environment to carry out the MGH project; the local representatives of the association who supported our photographer friends throughout the work; and to our photographer friends who completed this long and troublesome process by trusting us and created MGH with their visual stories.</Paragraph>
        </Section>
        <h4 className="font-semibold mt-8 text-end">Özcan Yurdalan, Yusuf Aslan, Aykan Özener</h4>
      </>
    )
  }
  return null
}

function Editor1({ lang }: { lang: Lang }) {
  if (lang == 'tr') {
    return (
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
              <img src="/img/aykan_ozener.jpg" width="400" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (lang == 'en') {
    return (
      <div className="mt-32 shadow-xs bg-white px-4 py-4 md:px-8 md:py-8 rounded-xl">
        <h4 className="font-semibold text-2xl mb-4">Aykan ÖZENER</h4>
        <div className="flex w-full gap-10 flex-col-reverse md:flex-row mt-10 md:mt-0">
          <div className="grow">
            <p className="mt-2">Born in 1964, in Balıkesir, Aykan Özener is a graduate of Selcuk University, Classical Archeology Department. Özener completed his master's degree with the thesis titled "Photography Techniques in Archeology" and started working on photography in 1983</p>
            <p className="mt-2">He became a member of AFSAD (ANKARA PHOTOGRAPHY ARTISTS' ASSOCIATION) in 1987 and started looking for new pursuits in photography. After having worked under the umbrella of AFSAD between 1987 and 1995, he continues working independently.</p>
            <p className="mt-2">His photographs and articles have been published in culture and art magazines.</p>
            <p className="mt-2">He has attended many seminars.</p>
            <p className="mt-2">He has organized the first five Çanakkale Photography Festivals.</p>
            <p className="mt-2">He has been a lecturer of photography for twenty years at Çanakkale Onsekiz Mart University.</p>
            <p className="mt-2">Between 2018-2019, he worked as an editor with the participating associations on behalf of Türkiye Fotoğraf Sanatı Federasyonu (Turkey Photography Art Federation) with Özcan Yurdalan and Yusuf Arslan.</p>
            <p className="mt-2">He is also the chairman of the board of Pan Görsel Kültür Derneği (Pan Visual Culture Association) he has established in Çanakkale.</p>
            <p className="mt-2">He is the photo editor of Aktuel Arkeoloji Dergisi (Aktuel Archeology Magazine).</p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
              <img src="/img/aykan_ozener.jpg" width="400" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

function Editor2({ lang }: { lang: Lang }) {
  if (lang == 'tr') {
    return (
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
              <img src="/img/ozcanyurdalan.jpg" width="400" className="-translate-y-5" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (lang == 'en') {
    return (
      <div className="mt-12 shadow-xs bg-white px-4 py-4 md:px-8 md:py-8 rounded-xl">
        <h4 className="font-semibold text-2xl mb-4">Özcan YURDALAN</h4>
        <div className="flex w-full gap-10 flex-col-reverse md:flex-row mt-10 md:mt-0">
          <div className="grow">
            <p className="mt-2">He was born in 1955.</p>
            <p className="mt-2">He was among the founders of AFSAD in 1977</p>
            <p className="mt-2">He was a member of the team that started photographic works with children and developed its methodology in Turkey, in 1999..</p>
            <p className="mt-2">Between 2000-2004, he took part in the establishment process of Fotoğraf Vakfı (the Photography Foundation).</p>
            <p className="mt-2">He was among the founders of Nar Fotos in 2003.</p>
            <p className="mt-2">He took part in the editorial boards of Fotoğraf Notları and Fotoğrafsız magazines published by Galata Fotoğrafhanesi.</p>
            <p className="mt-2">He was one of the organizers of the documentary photography training called "MGH - Memleketimden Görsel Hikayeler" (Visual Stories from My Hometown) organized by Türkiye Fotoğraf Sanatı Federasyonu (Turkey Photography Art Federation) in 2018-2019. The project was carried out with almost two hundred photographers from all around Turkey. </p>
            <p className="mt-2">He has published ten books. These are the travel books of Iran, Pakistan, India, Nepal, Mongolia, Syria and Morocco in "Sarı Otobüs" (the Yellow Bus) series, the essay book “Bir Seyyahın Kaybolma Kılavuzu” (A Traveler's Disappearance Guide), his theoretical work "Belgesel Fotoğraf ve Fotoröportaj” (Documentary Photography and Photo-Interview) and his compilation “Bir İsyanı Fotoğraflamak" (Photographing a Revolt).</p>
            <p className="mt-2">His photographs and articles have been published and exhibited in many books, exhibitions, and shows.</p>
            <p className="mt-2">He is going on long journeys in Asian cultural geography.</p>
            <p className="mt-2">He gives lectures on documentary photography and photo-interview, organizes guide seminars where he shares the methods of photography with children, and organizes workshops on travel literature.</p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
              <img src="https://mgh.tfsf.org.tr/img/ozcanyurdalan.jpg" width="400" className="-translate-y-5" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

function Editor3({ lang }: { lang: Lang }) {
  if (lang == 'tr') {
    return (
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
    )
  }
  if (lang == 'en') {
    return (
      <div className="mt-12 shadow-xs bg-white px-4 py-4 md:px-8 md:py-8 rounded-xl">
        <h4 className="font-semibold text-2xl mb-4">Yusuf ASLAN</h4>
        <div className="flex w-full gap-10 flex-col-reverse md:flex-row mt-10 md:mt-0">
          <div className="grow">
            <p className="mt-2">He is a teacher. He completed his primary and secondary education in Sivas and the teaching school in Savaştepe. He studied Journalism and Public Relations. He worked as a teacher in Sivas, Aydın and Germany.</p>
            <p className="mt-2">He was on the boards of the Kuşadası Photography and Cinema Art Association (KUFSAD) and was among the organizers of the International Kuşadası Photography Days held during this process.</p>
            <p className="mt-2">News photos he took were published in the press of western countries, one of which was on the cover of Der Spigel.</p>
            <p className="mt-2">He worked in the Dutch News Agency's project called "Europe: Castle Gate", which criticized Europe's attitude towards the refugees through human stories.</p>
            <p className="mt-2">He took part in national and international photography festivals with his exhibitions and shows.</p>
            <p className="mt-2">His photos were published in magazines and books.</p>
            <p className="mt-2">He worked in photography workshops with children.</p>
            <p className="mt-2">He was one of the organizers of the documentary photography training called "MGH - Memleketimden Görsel Hikayeler" (Visual Stories from My Hometown) organized by Türkiye Fotoğraf Sanatı Federasyonu (Turkey Photography Art Federation) in 2018-2019.</p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
              <img src="https://mgh.tfsf.org.tr/img/yusufaslan.jpg" width="400" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
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
