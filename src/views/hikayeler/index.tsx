import { Hikaye, Lang } from "@/common/types"
import Image from "next/image"
import Link from "next/link"

interface HikayelerViewProps {
  hikayeler: Hikaye[]
  lang: Lang
  path: string
}

export default function HikayelerView({ hikayeler, lang, path }: HikayelerViewProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative text-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text">
              {lang == 'tr' && 'Fotoğraf Hikayeleri'}
              {lang == 'en' && 'Stories'}
            </h1>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {hikayeler.map((data, i) => (

            <Link
              href={`/${lang}/${path}/${data.url}`}
              key={data.id}
              className="group relative /*bg-white*/ rounded-lg shadow-sm3 /*shadow-sm hover:shadow-md*/ transition-all duration-500 overflow-hidden cursor-pointer transform"
            // onClick={() => setSelectedPhoto(photo)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                <Image
                  fill
                  src={`https://d1zgytwt7cl79p.cloudfront.net/tumhikayeler/${data.tema}/${data.folder}/thumb/${data.thumb}`}
                  // @ts-ignore:next-line
                  alt={data[`adi${lang.toUpperCase()}`]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Content */}
                <div className="hidden absolute bottom-0 left-0 right-0 p-4 transform /*translate-y-full group-hover:translate-y-0*/ transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
                    {/* @ts-ignore:next-line */}
                    {data[`adi${lang.toUpperCase()}`]}
                  </h3>
                  <div className="flex items-center text-sm text-gray-200">
                    <span className="font-medium">
                      {data.pg}
                      {/* {photo.photographer.name} {photo.photographer.surname} */}
                    </span>
                    {/* <span className="mx-2">•</span>
                    <span className="text-blue-300">{photo.photographer.agency}</span> */}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="py-2">
                <h3 className="font-medium text-gray-900 text-lg line-clamp-2 group-hover:text-black transition-colors">
                  {/* @ts-ignore:next-line */}
                  {data[`adi${lang.toUpperCase()}`]}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* <div> */}
                    {/* <span className="text-xs text-gray-500">{photo.photographer.name} {photo.photographer.surname}<span className="mx-2">•</span>{photo.photographer.agency}</span> */}
                    <span className="text-xs text-gray-500">{data.pg}</span>
                    {/* </div> */}
                  </div>
                  {/* <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}