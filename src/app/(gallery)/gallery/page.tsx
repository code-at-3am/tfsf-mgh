'use client'
import { useState, useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { GallerySource } from "../../(main)/page"
import 'swiper/css';
import type { Swiper as SwiperType } from 'swiper';

const gallerySource: GallerySource[] = [
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/06_gecmisten_gelen/12/ates_komur_ve_duman_1.jpg',
    description: 'Zeynep ve Cesur, Mersin Yenice’deki torak alanındaki çadırda televizyon seyrediyor.',
    photographer: 'Ümmügülsüm Güneş'
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/06_gecmisten_gelen/12/ates_komur_ve_duman_3.jpg',
    description: '',
    photographer: 'Ümmügülsüm Güneş'
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/06_gecmisten_gelen/12/ates_komur_ve_duman_4.jpg',
    description: 'Yenice’deki torak alanına kurdukları çadırın bir köşesi mutfak olarak kullanılıyor. Resul’ün de söylediği gibi kömür yaparken Behiye’yle birlikte çalışıyorlar ama çadıra geldiklerinde kendisi dinlenirken Behiye bu köşede çalışmaya devam ediyor. ',
    photographer: 'Ümmügülsüm Güneş'
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/06_gecmisten_gelen/12/ates_komur_ve_duman_5.jpg',
    description: 'Annesi ve babası Yenice’de kömür tepesi kurarken Zeynep işin ne içinde ne dışında, merdiven üstünde oturuyor. Behiye odun kömürü yaparken çok zorlandığı için Zeynep’le bir olup farklı bir iş bulması için Resul’ü cesaretlendiriyorlar. ',
    photographer: 'Ümmügülsüm Güneş'
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/06_gecmisten_gelen/12/ates_komur_ve_duman_6.jpg',
    description: 'Bir torak bitiminde eve dönüş herkesi çok mutlu ediyor.  ',
    photographer: 'Ümmügülsüm Güneş'
  },
  {
    src: 'https://mgh.tfsf.org.tr/tumhikayeler/06_gecmisten_gelen/12/ates_komur_ve_duman_7.jpg',
    description: 'Zeynep ve Rabia arkadaşlarının sokağa çıkmalarını beklerken komşu teyzelerin sohbetini dinliyor. Adana\'daki evlerinin bulunduğu sokakta kapı önü sohbetleri mahalledeki sosyal faaliyetlerden biri. ',
    photographer: 'Ümmügülsüm Güneş'
  },
]

interface PageProps {

}

export default function Page({ }: PageProps) {

return (
  <GalleryComponent />
)


}

interface GalleryComponentProps {

}

function GalleryComponent({ }: GalleryComponentProps) {

  const [isInfoActive, setIsInfoActive] = useState(false)
  const [isContentVisible, setIsContentVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    if (isInfoActive) {
      const timer = setTimeout(() => {
        setIsContentVisible(true)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setIsContentVisible(false)
    }
  }, [isInfoActive])

  function swipeSlide(direction: 'next' | 'prev') {
    if (direction == 'next') {
      swiperRef.current?.slideNext()
    }
    if (direction == 'prev') {
      swiperRef.current?.slidePrev()
    }
  }

  return (
    <div className="w-full h-dvh bg-gray-900 flex flex-col overflow-hidden">
      <div className="w-full flex justify-center border-b border-gray-950 h-[60px]  relative">
        <h1 className="text-white text-xl px-2 py-4">Ateş, Kömür ve Duman</h1>
        <div className="absolute top-3 right-4">
          <button className="text-white rounded-full w-9 h-9 border-white flex justify-center items-center cursor-pointer hover:bg-gray-800" onClick={() => { }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24">
              <path fill="currentColor" d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center grow h-[calc(100vh-120px)] px-6">
        <div className="h-full grow flex justify-center items-center overflow-hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            className="h-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              console.log(swiper);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex)
              console.log('slide change', swiper.activeIndex)
            }}
          >
            {gallerySource && gallerySource.map(image => (
              <SwiperSlide className="w-fit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="flex justify-between">
                  <div className="flex justify-center px-4 grow">
                    <img src={image.src} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={`text-white h-full flex flex-col justify-end transition-[width_min-width] duration-300 ${isInfoActive ? 'w-80 min-w-80' : 'w-0 min-w-0 overflow-hidden'}`}>
          <div className={`p-6 ${isContentVisible ? 'opacity-100 transition-opacity duration-200' : 'opacity-0'}`}>
            <p className="mb-2 text-gray-300">Ateş, Kömür ve Duman</p>
            <hr className="border-gray-800 mb-6" />
            <p className="mb-4 text-[15px]">{gallerySource[activeIndex]?.description || ''}</p>
            <p className="text-[14px] text-gray-500">{gallerySource[activeIndex]?.photographer || ''}</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center border-t border-gray-950 h-[60px] px-4 bg-gray-950">
        <div className="">
          <button className="text-white rounded-full w-9 h-9 flex justify-center items-center cursor-pointer hover:bg-gray-900" onClick={() => setIsInfoActive(old => !old)}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm8-4q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9M8 19h8V5H8zM8 5h8zM4 19h2v-2H4zm14 0h2v-2h-2zM4 15h2v-2H4zm14 0h2v-2h-2zM4 11h2V9H4zm14 0h2V9h-2zM4 7h2V5H4zm14 0h2V5h-2z"></path>
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 7q-.825 0-1.412-.587T10 5t.588-1.412T12 3t1.413.588T14 5t-.587 1.413T12 7m0 14q-.625 0-1.062-.437T10.5 19.5v-9q0-.625.438-1.062T12 9t1.063.438t.437 1.062v9q0 .625-.437 1.063T12 21"></path>
            </svg>
          </button>
        </div>
        <div className="grow flex items-center justify-center h-full max-h-full py-1 px-2 gap-1">
          {gallerySource && gallerySource.map((image, i) => (
            <div key={image.src} className={`flex h-full cursor-pointer ${activeIndex == i ? 'opacity-100 border-b-2 border-b-white' : 'opacity-60'} hover:opacity-100`} onClick={() => swiperRef.current?.slideTo(i)}>
              <img src={image.src} className="h-[50px]" />
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div className="text-white mr-4">
            {(swiperRef.current?.activeIndex ?? 0) + 1}
            <span className="text-gray-600"> / {gallerySource.length}</span>
          </div>
          <div className="flex h-full gap-2">
            <button className="text-white rounded-full w-9 h-9 border-white flex justify-center items-center cursor-pointer hover:bg-gray-900" onClick={() => swipeSlide('prev')}>
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                <path fill="currentColor" d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"></path>
              </svg>
            </button>
            <button className="text-white rounded-full w-9 h-9 border-white flex justify-center items-center cursor-pointer hover:bg-gray-900" onClick={() => swipeSlide('next')}>
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 