
import PhotoGallery from "@/component/photo-gallery/photo-gallery";
import Image from "next/image";

export interface GallerySource {
  src: string
  description: string
  photographer?: string
}

const gallerySource: GallerySource[] = [
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_5.jpg',
    description: 'Muamma Futbol Takımı’nın da katıldığı, Queer Olimpik Organizasyonu coşkuyla kapanıyor. Organizasyon 8-12 Ağustos 2018 tarihlerinde İstanbul’da geçekleşmiş. Amaç, “her beden ve her cinsiyetin kendini rahat hissedeceği şekilde oyunları yeniden kurgulamak ve dışlayıcı oyun formlarını aşmak” şeklinde özetleniyor. Etkinliklere yurtiçinden ve dışından takımlar katılmış.',
    photographer: 'Hatice ATAÇ'
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_6.jpg',
    description: 'Aslı ve arkadaşları soyunma odasında maça hazırlanıyor. Muamma takımı oyuncuları cinsiyetsiz bir yaşamı savundukları için, cinsiyet beyanları farklı olsa da aynı soyunma odasını paylaşıyorlar.'
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_7.jpg',
    description: ''
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_8.jpg',
    description: ''
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_9.jpg',
    description: ''
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_10.jpg',
    description: ''
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_11.jpg',
    description: ''
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_12.jpg',
    description: ''
  }
]

export default function Home() {
  return (
    <>
      <div className="px-4 py-6">
        <h1 className="text-3xl">Muamma</h1>
      </div>
      <PhotoGallery images={gallerySource} />
      {/* <div className="flex justify-center">
      <img src="https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_13.jpg" />
    </div> */}
    </>
  );
}
