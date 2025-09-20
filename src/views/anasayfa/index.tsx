'use client'
import { Banner, Lang, TemaLang } from "@/common/types"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface AnasayfaProps {
  lang: Lang
  banners: Banner[]
  themes: TemaLang[]
}

export default function Anasayfa({ lang, banners, themes }: AnasayfaProps) {

  const [selectedBanners, setSelectedBanners] = useState<Banner[]>([])

  useEffect(() => {
    const indexes = randomNumbers(10, banners.length)
    const selectedBanners = indexes.map(index => banners[index])
    setSelectedBanners(selectedBanners)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full flex justify-center mb-8 px-0">
        <div className="relative max-w-7xl w-full pt-8">
          <SwiperComp banners={selectedBanners} lang={lang} />
        </div>
      </div>

      <div className="relative text-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-2 md:pb-16 md:pt-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text">
              {lang == 'tr' && 'Temalar'}
              {lang == 'en' && 'Themes'}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {themes[0][lang].map((theme: any) => (
            <div key={theme.klasor}>
              <FotoItem data={theme} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function randomNumbers(count: number, total: number) {
  const arr: number[] = []
  while (count > 0) {
    const num = randomNumber(0, 85)
    if (!arr.includes(num)) {
      arr.push(num)
      count--
    }
  }
  return arr
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

function SwiperComp({ banners, lang }: { banners: Banner[], lang: Lang }) {

  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      className="h-full max-w-[1200] [--swiper-pagination-bottom:-4px] [--swiper-navigation-color:rgba(0,0,0,.3)]"
      style={{ paddingBottom: '28px' }}
      navigation={{
        enabled: true,
      }}
      // autoplay={{
      //   delay: 3000,
      //   pauseOnMouseEnter: true
      // }}
      pagination={{
        clickable: true,
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        console.log(swiper);
      }}
      onSlideChange={(swiper) => {
        // setActiveIndex(swiper.activeIndex)
        console.log('slide change', swiper.activeIndex)
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {banners && banners.map(banner => (
        <SwiperSlide key={banner.url} className="w-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="flex justify-between w-full">
            <div className="flex justify-center grow">
              <Image
                width={1200}
                height={400}
                alt={banner.dosya}
                src={`https://d1zgytwt7cl79p.cloudfront.net/banners/${lang}/${banner.dosya}`}
                className="w-full h-full object-cover" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

function FotoItem({ data, lang }: { data: any, lang: Lang }) {
  const path = lang == 'tr'
    ? 'temalistesi'
    : lang == 'en'
      ? 'themelist'
      : ''

  return (
    <Link
      href={`/${lang}/${path}/${data.klasor}`}
      key={data.klasor}
      className="group relative /*bg-white*/ rounded-lg shadow-sm3 /*shadow-sm hover:shadow-md*/ transition-all duration-500 overflow-hidden cursor-pointer transform"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
        <Image
          fill
          // src={`/assets/tumhikayeler/${data.klasor}/${data.gorseller[0].gorsel}`}
          src={`https://d1zgytwt7cl79p.cloudfront.net/tumhikayeler/${data.klasor}/${data.gorseller[0].gorsel}`}
          alt={data.adi}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="py-2">
        <h3 className="font-medium text-gray-900 text-lg line-clamp-2 group-hover:text-black transition-colors">
          {data.adi}
        </h3>
      </div>
    </Link>
  )
}