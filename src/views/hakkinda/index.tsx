import { Lang } from "@/common/types";

interface HakkindaProps {
  lang: Lang
}

export default function Hakkinda({ lang }: HakkindaProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative text-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text">
              {lang == 'tr' && 'Proje Hakkında'}
              {lang == 'en' && 'About Project'}
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-8 text-lg leading-7 md:text-xl md:leading-8">
        <div className="[&>p]:mt-4">
          <div className="max-w-full pl-0 md:pl-10 pb-6 md:float-right flex justify-center">
            <div className="w-[400px] max-w-full aspect-square rounded-full overflow-hidden">
              <img src="/img/sefaulukan.jpg" className="" />
            </div>
          </div>
          <Content lang={lang} />
        </div>
      </div>
    </div>
  )
}

function Content({ lang }: { lang: Lang }) {
  if (lang == 'tr') {
    return (
      <>
        Değerli Dostlar,<br />
        <p>Ben size burada TFSF Yönetim Kurulu Başkanı olarak bilindik ağdalı sözlerle bir yazı yazmayı değil de, projenin başından beri bu işin koordinatörlüğünü üstlenmiş içinizden biri olarak bir yol hikayesini, olayların perde arkasında yaşananları aktarmak istiyorum. Çünkü bu projenin arkasında çok emek var, bir çalışma sistemi var ve bunun kayda geçmesinde fayda olduğuna inanıyorum.</p>
        <p>Aslında MGH Projesine başlarken ne kadar geniş kapsamlı olabileceğini konuşmuştuk editörlerimizle ve iyi kötü bir fikrimiz vardı. Proje, 2017 yılı Ekim ayında başkanlar toplantısında dönemin TFSF Yönetim Kurulu Başkanı A. Beyhan ÖZDEMİR tarafından duyuruldu ve 19 Ocak 2018 tarihinde de derneklerimize katılım çağrısını yaptık. Aynı tarihlerde TFSF yönetimi tarafından Proje Koordinatörlüğüne atandım. Ancak, başvurular gelmeye başladığında beni saran heyecanı yaşamanızı dilerdim. Her geçen gün artan katılımcı dernek ve proje sayısı çok keyif veriyordu. İnsanlar özlemişlerdi böyle çalışmaları, bu ilk tespitti.</p>
        <p>Sonra yeni kavramlarla karşılaştık, sevgili Özcan YURDALAN “Kanava” diye bir şey söyledi, ben dahil bir çok kişi ilk kez duydu sanırım. Hatta esprilerini yaptık bir süre, sonra baktık ki olmazsa olmaz bir şeymiş bu “Kanava”. Bize sistemli çalışmanın ilk temelini atmayı öğretiyordu. Proje sonunda bazı Üniversitelerimizin fotoğraf bölümlerinde eğitim sistemi içine girmişti bile bu bizim meşhur “Kanava”.</p>
        <p>Katılımcı dernek sayımız 30’ları geçtiğinde 300’ü aşkın fotoğrafçıdan 240 proje önerisi gelmişti bile. Uzun soluklu bir projede yapılması gerekenleri planladık, her derneğin temsilcileri belirlendi ve editörlerimiz 28-29 Mart 2018 tarihinde Ankara’da TFSF Merkezinde onlarla buluştu, her üç editörümüz tek tek anlattı sistemi, yapılması gerekenleri. Son derece verimli bir toplantı oldu.</p>
        <p>Koordinatör olarak projeler ve sorular yağmaya başladı, çoğu zaman gece yarılarına kadar hiç bıkmadan usanmadan cevaplar yazdım. Onlardan gelenleri editörlerimize, editörlerden gelenleri ilgili arkadaşlara. Şunu gördük ki dernek temsilcileri ne kadar etkinse çalışmalarda o kadar sağlıklı ilerliyordu.</p>
        <p>İkinci tespitim ise, fotoğraf dünyasında olan bizler “Editöryal” bir çalışmaya yatkın değildik. Hepimiz eleştiri ve yorumlara açık olduğumuzu söylesek te, yapımız buna pek izin vermiyordu. Bu beklediğimiz bir şeydi, bazı dostlarımız bu çalışmanın kendilerine uygun olmadığını fark edip ayrıldılar kendi istekleri ile. Hemen belirteyim ne TFSF yönetimi ne de editörlerimiz bir eleme yapmadı. Sonuna kadar sistemli çalışan, zamana uyan, vakit ayıran, konulan kurallara uyan her proje finale kadar geldi.</p>
        <p>İkinci aşama fotoğrafları üretecek kişilerle yapılacak toplantılardı. Bunu da editörlerimizin öneri ile gelen çalışmaların yoğunluğuna göre bölge toplantıları şeklinde yaptık. Ben ve üç editörümüz düştük yollara, en az bir hafta sonumuzu bu toplantılarda Türkiye’nin farklı illerinde gerçekleştirdik. Projeye fotoğraf veren dostlar yakın illerden kalkıp geldiler bu toplantılara. Tek tek, anlatıldı, dinlenildi ve her birine projeleri ile ilgili ödevler verildi. İlk olarak 12 - 13 Mayıs 2018 de Muğla’da MUFSAT’ın ev sahipliği ile Ege Bölgesi dernek katılımcıları ile buluştuk. Hemen ardından 9 - 10 Haziran 2018 sıcağında Adana’da AFAD ve FOTOGRAFYA’nın ev sahipliği ile Güney ve Güneydoğu illerindeki dernek katılımcıları ile toplandı editörlerimiz. Ara vermeden peş peşe iki toplantı daha yaptık 07 - 08 Temmuz 2018’de EFOD’un ev sahipliği ile Edirne’de Marmara bölgesindeki dostlarımızla ve son olarak ta 14 -15 Temmuz 2018 ‘de Ankara TFSF merkezinde bu kez İç Anadolu ve diğer illerden gelen fotoğrafçılarla buluştuk. Her toplantı sonrası editörlerin istediği fotoğraflar gelmeye başladı koordinatör olarak bana. Tüm bu fotoğraflar gruplandırıldı ve üç editörümüze yollandı. Editörlerimiz birbirinden bağımsız bir şekilde her fotoğraf için yorumlar yazdılar ve bana gönderdiler ben de ilgili dernek temsilcilerine. Dile kolay yaklaşık 7200 fotoğraftan bahsediyoruz. Editörler bunlara 150 word sayfasını aşkın yorumlar yazdılar. Kitap yazıldı desem yalan olmaz.</p>
        <p>28 Temmuz 2018’de editörlerimiz, TFSF Başkanı A. Beyhan ÖZDEMİR ve ben İzmir’de bir araya gelerek genel bir değerlendirme toplantısı yaptık ve yol haritamızı belirledik.</p>
        <p>2019 yılı projenin devam yılı idi, fotoğraflar geliyor, editörler tek tek inceliyor, yorumlar öneriler devam ediyordu. Birer birer olgunlaşan çalışmalar verilen emeğin karşılığı olarak ortaya çıkıyordu.</p>
        <p>Her projeye en az 80 fotoğraf seçilerek gelmişti, tüm bu fotoğrafları değerlendirmek için 01 - 06 Şubat 2019 tarihleri arasında editörlerimiz Kuşadası’nda Kültür Merkezi KUAKMER’de kampa girdi. Her proje tek tek incelendi bu altı gün boyunca, bu süreçte editörlere arada bir ekmek ve su verdiklerini söylediler. KUAKMER sorumlusu değerli Eylem AKGÜN’e destekleri için şükranlarımı sunarım.</p>
        <p>9-10 Şubat 2019 BODFAD ev sahipliğinde Bodrum’da, 16-17 Şubat 2019 MFD ev sahipliğinde Mersin’de ve 23-24 Şubat 2019’da Ankara’da TFSF merkezinde son seçki toplantıları yapıldı.</p>
        <p>Son fotoğraflar teslim edildiğinde bunun işleme süreci başladı, profesyonel bir yardım alındı bu süreçte. Bu devam ederken proje yazıları, fotoğraf altı yazıları, özgeçmişler gelmeye başladı. Bunların toparlanması ve farklı bir göz tarafından son okuma yapılması gerekli idi. Bu sırada Raziye KÖKSAL KARTAL yetişti imdadımıza, süratle toparladı çalışmaları.</p>
        <p>Tüm toplantılarda bu projenin hedefleri konusunda söylediğimiz birkaç konu vardı. Öncelikli hedefimiz fotoğrafçılarda bir proje çalışma sistemi, yönetimini geliştirmek ve uygulamak. Bunu başardığımızı söyleyebilirim. Projesini bir şekilde sonlandıramayan dostlarımız bile kabul ettiler bunu.</p>
        <p>Ortaya çıkacak projelerin nasıl değerlendirileceği konusunu her toplantıda katılımcılara da sorarak kararlaştırmaya çalıştık. Bunun sonucunda birinci öneri olarak üst tema başlıkları ile gösteriler hazırlamak ve bunları derneklerde ve çeşitli mekanlarda paylaşmak idi. Bunun için editörlerimizin denetiminde AFSAD’tan Cem DEMİR yoğun bir mesai harcayarak sunum paketlerini hazırladı, ellerine emeğine sağlık. Şu anda düzenlenecek iki günlük etkinlik için bir program taslağı ile hazır bir hale gelmiştir. Çok keyifli bir gösteri günleri olacaktır eminim.</p>
        <p>İkinci hedefimiz bu projeyi sanal ortama çıkartarak, sadece Türkiye’nin değil dünyanın izlemesini istedik. TFSF yönetimi olarak bunun alt yapısı için titiz bir çalışmaya başladık. Yine editörlerimizin önerilerine uygun bir tasarım ve sistem kurmaya çalıştık. Çoğu zaman sabahlara kadar çalışarak, tek tek inceleyerek şu anda gördüğünüz web tasarımı Onur DEMİRKAPI ve Çağdaş SAYGILI tarafından sıfırdan kodları yazılarak yapıldı. 200’e yakın banner hazırladı Burak DURHASAN, teşekkür ederim. Bu web portalı bize ek bir iş daha getirdi o da tüm yazıların İngilizceye çevrilmesi. Bu konuda değerli Nurulhude BAYKAL’dan profesyonel yardım, çok teşekkürler. Yabancı dilde olması çok önemliydi. Çünkü şunu rahatlıkla söyleyebilirim, Türkiye dışında hiçbir fotoğraf federasyonunda böyle uzun soluklu, geniş katılımlı, kendine özgü, yoğun bir çalışma yapılmamıştır ve bunun duyurulması önemli idi. Umarım beğenirsiniz.</p>
        <p>TFSF yönetimi olarak söz vermediğimiz ama yapmayı planladığımız son bir hedefimiz daha var o da bu çalışmanın basılı yayın hale gelmesi. Tema başlıkları üzerinden fasikül olarak bir yayın planı içindeyiz, umarım bunu da gerçekleştiririz. Bundan sonraki gösteri ve yayın konularında devam eden süreci TFSF tarafından yeni koordinatör olarak atanan Sayın Ünal ÖZFUÇUCU yönetecektir. Yani proje hala devam etmektedir.</p>
        <p>Son söz olarak, başta hiçbir maddi beklenti içine girmeden ilk andan itibaren son derece disiplinli bir çalışma sistemi ile emek emek bu projeyi gerçekleştiren değerli editörlerimiz Özcan YURDALAN, Aykan ÖZENER, ve Yusuf ASLAN’a TFSF yönetimi olarak sonsuz teşekkürlerimi sunarım. Ayrıca her aşamada bana yardımcı olan TFSF’nin sekretaryasını yürüten Ferhat SARIKOÇ’a ve yukarıda belirttiğim sistem içinde çaba sarf eden tüm dernek temsilcilerine, katılımları ve fotoğrafları ile bu projenin gerçekleşmesine neden olan tüm fotoğrafçı dostlarıma, ismini unutmuş isem beni affetmesi dileği ile tüm emeğe geçenlere şükranlarımı sunuyorum.</p>
        <div className="mt-8 font-semibold">
          <div>Sevgi ve saygılarımla.</div>
          <div>Dr. Sefa Ulukan</div>
          <div>TFSF Yönetim Kurulu Başkanı</div>
          <div>21 Mart  2020</div>
        </div>
      </>
    )
  }

  if (lang == 'en') {
    return (
      <>
        Dear Friends,
        <p>As the Chairman of the Board of TFSF (Turkey Photography Art Federation), I do not want to write an article with familiar grandiloquent words, but to convey the story of the road, the events behind the scenes, as one of you who has been the coordinator of this project since the beginning of the project. Because there are lots of work behind this project and a working system and I believe it is useful to record it.</p>
        <p>In fact, when we started the "MGH - Memleketimden Görsel Hikayeler" (Visual Stories from My Hometown) Project, we talked about how wide reaching it could be with our editors and we had an idea about it. In October 2017, at the presidents meeting, A. Beyhan ÖZDEMİR, the Chairman of the Board of TFSF at that time, announced it and then on 19 January 2018, the decision was announced to our associations for their participation. Around those days, I was appointed as the Project Coordinator by TFSF management. However, I wish you had the excitement surrounding me when the applications started to arrive. The increasing number of participating associations and projects day by day was very pleasing. People were longing for such work; this was the first point.</p>
        <p>Then we encountered new concepts, dear Özcan YURDALAN said something like “Kanava”, I think many people -including me- heard it for the first time. We even made jokes about it for a while, and then we saw that this “Kanava” was an indispensable thing. It taught us to lay the first foundation for systematic work. By the end of the project, in the photography departments of some of Turkish universities our famous “Kanava” was included in the curricula.</p>
        <p>When the number of participating associations passed the 30s, 240 project suggestions from more than 300 photographers had already been received. We planned what should be done in a long-term project, representatives of each association were determined, and our editors met with them at the TFSF Center in Ankara on 28-29 March 2018, each one of our three editors told the system step by step. It was an extremely productive meeting.</p>
        <p>As a coordinator, I received many projects and questions, I wrote answers without getting tired sometimes until midnight. I directed the ones coming from the representatives to our editors, the ones coming from the editors to the concerned friends. We saw that the more effective the representatives of the associations were, the better the progress was in their work.</p>
        <p>The second point was that we being in the world of photography were not prone to an “Editorial” work. Although we all have said that we are open to criticism and comments, our character did not allow that much. This was something we expected, some of our friends realized that this work was not suitable for them and left with their own will. Let me state it at this point, neither TFSF management nor our editors made any elimination; every project that worked according to the system, followed the schedule, spared time, and complied with the rules set up until the end reached the final.</p>
        <p>The second stage was meetings with people who would produce the photos. With the suggestion of our editors, we organized the meetings in the form of regional meetings according to the intensity of the works we received. Our three editors and I hit the road; we spent at least one weekend in each month for these meetings in different cities of Turkey. The friends who sent photos for the project came from nearby cities. In these meetings everything was told one by one, we talked, we listened, and we also gave assignments to each participant about their projects. First of all, we met with the participants of Aegean Region association on 12-13 May 2018 in Muğla with the hosting of Mufsat and Bodfad. Immediately afterwards, our editors gathered with the participants of the association in South and Southeast cities with the hosting of AFAD and Fotografya in Adana in the heat of June 9 - 10, 2018. We held two more consecutive meetings without a break on 07-08 July 2018 with our friends from the Marmara region in Edirne, hosted by EFOD, and finally with photographers from Central Anatolia and other cities in Ankara TFSF center on 14-15 July 2018.  As the coordinator, I started to receive the photos requested by the editors after each meeting. All these photos were classified and sent to our three editors. Independent of each other, our editors wrote comments for each photo and sent them to me. I sent them to the representatives of the association. Easier said than done, we are talking about 7,200 photos, the editors wrote over 150 MS Word pages of comments for them. It wouldn't be a lie if I say we wrote a book.</p>
        <p>On July 28, 2018, our Editors, the Chairman of the Board of TFSF A. Beyhan ÖZDEMİR and I met in İzmir and held a general evaluation meeting and set the course of the project.</p>
        <p>2019 was the continuation year of the project, photographs were coming, editors were examining them one by one, and comments and suggestions were being made. The works that improved one by one came out in exchange of the labor provided.</p>
        <p>At least 80 photos were selected for each project; our editors secluded themselves in Kuşadası Culture Center KUAKMER on 01-06 February 2019 to evaluate all these photos. During these six days, each project was examined one by one. Eylem AKGÜN in charge of KUAKMER told us that they gave bread and water to the editors every once in a while during time.</p>
        <p>Last election meetings were held in Bodrum, hosted by BODFAD 9-10 February 2019, in Mersin hosted by MFD 16-17 February 2019, and in TFSF center in Ankara on 23-24 February 2019</p>
        <p>When the last photos were received, the processing period started and we had professional help in this process. While it continued, project articles, photo captions, and resumes started to arrive. These had to be got together. After that a final proofreading was required by someone else. In the meantime, Raziye KÖKSAL KARTAL offered help and got all the work done very quickly.</p>
        <p>In all the meetings, there were a few issues we mentioned about the objectives of this project. Our primary goal was to develop and implement a project conducting and management system for photographers. I can say that we have achieved it. Even our friends who could not somehow complete their project accepted it.</p>
        <p>We tried to decide how to evaluate the projects that will emerge, by asking the participants at each meeting. As a result, the first suggestion was to prepare demonstrations with top theme titles and to share them in association buildings and various locations. For that, Cem DEMİR from AFSAD prepared the presentation packages with lots of effort under the supervision of our editors, we send him our gratitude. It is now ready with a draft schedule for the two-day event to be held. I am sure the demonstration days will be very enjoyable.</p>
        <p>The second target was by taking this project to a virtual environment to let the world see our project not only people in Turkey. As TFSF management, we started a meticulous work for its infrastructure. Again, we tried to establish a design and system in accordance with the recommendations of our editors. Most of the time by working till morning, the web design you see now was done by Onur DEMİRKAPI and Çağdaş SAYGILI, they wrote the codes themselves. Burak DURHASAN has prepared nearly 200 banners; I thank him. This web portal has brought us an additional work: translating the content to English. As TFSF management, we have completed this work by paying for it. It was very important to have it in English because I can confidently say that I do not think in any other country other than Turkey in any photography federation there has not been such a long running, well-attended, unique, and intense activity; and hence it was important to publicize it. I hope you will like it.</p>
        <p>As TFSF management, we have one last target that we did not promise for but we planned for: to get this work into a printed publication. We have a publication plan to publish the theme titles as booklets, I hope we will realize that too. From now on, Dear Ünal ÖZFUÇUCU, who has been appointed as the new coordinator by TFSF, will manage the ongoing processes of demonstrations and publications issues. So the project is still going on.</p>
        <p>For the last word, as TFSF management, I would like to offer my endless thanks to the dear editors Özcan YURDALAN, Aykan ÖZENER, and Yusuf ASLAN, for realizing this project with lots of efforts without any material expectations from the very beginning, with a highly disciplined working system from the very first moment. In addition, I present my gratitude to Ferhat SARIKOÇ, who conducts the secretariat of TFSF, who assisted me at every stage, and to all the representatives of the associations who made efforts in the system I mentioned above, to all my photographer friends for their participating and photos made this project real, and to all who has contributed, I hope they will forgive me if I forgot to mention their names.</p>
        <div className="mt-8 font-semibold">
          <div>With love and respect,</div>
          <div>Dr. Sefa Ulukan</div>
          <div>TFSF Chairman of the Board</div>
          <div>March 21, 2020</div>
        </div>
      </>
    )
  }

  return null
}
