'use client'
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import bannersData from "@/data/banners.json" with {type: 'json'};
import themesData from "@/data/temalar.json" with {type: 'json'};
import { Banner } from "@/common/types";
import 'swiper/css';
import Image from "next/image";

export interface GallerySource {
  src: string
  description: string
  photographer?: string
}

export default function Home() {

  const [banners, setBanners] = useState<Banner[]>([])
  const allBanners = bannersData as Banner[]
  const themes = themesData as any[]
  console.log('themes:', themes)

  useEffect(() => {
    const indexes = randomNumbers(10, allBanners.length)
    const banners = indexes.map(index => allBanners[index])
    setBanners(banners)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full flex justify-center mb-16 px-4">
        <div className="relative max-w-4xl w-full">
          <SwiperComp banners={banners} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {themes[0].tr.map((theme: any, i: number) => (
            <div>
              {/* <Image sizes="100vh" alt={banner.dosya} src={`/assets/banners/tr/${banner.dosya}`} /> */}
              <img alt={theme.dosya} src={`/assets/hikayeler/${theme.klasor}/${theme.gorseller[0].gorsel}`} style={{width: '100%'}} />
            </div>
          ))}
        </div>
      </div>
    </div>


  );
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

interface SwiperCompProps {
  banners: Banner[]
}

function SwiperComp({ banners }: SwiperCompProps) {

  const swiperRef = useRef<SwiperType | null>(null)
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      className="h-full"
      navigation={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true
      }}
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
        <SwiperSlide key={banner.url} className="w-fit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="flex justify-between">
            <div className="flex justify-center px-4 grow">
              <img src={`/assets/banners/tr/${banner.dosya}`} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
