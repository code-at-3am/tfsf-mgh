'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { GallerySource } from "@/app/(main)/page";

interface PhotoGalleryProps {
  images: GallerySource[]
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {

  // const [photoIndex, setPhotoIndex]

  return (
    <>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{type:'bullets'}}
          navigation={{enabled:true}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images && images.map(image => (
            <SwiperSlide>
              <div className="flex justify-between">

                <div className="flex justify-center px-4 grow">
                  <img src={image.src} />
                </div>
                {/* <div className="w-72 px-4 py-1 text-[15px]">
                  <p>
                  {image.description}
                  </p>
                  <p className="pt-6 text-gray-700">
                  {image.photographer}
                  </p>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  )
}