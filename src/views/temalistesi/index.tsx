import { Hikaye, Lang, Tema } from "@/common/types"
import Image from "next/image"
import Link from "next/link"

interface TemaViewProps {
  hikayeler: Hikaye[]
  lang: Lang
  title: string
}

export default function TemaView({ hikayeler, lang, title }: TemaViewProps) {
  const path = lang == 'tr'
    ? 'hikaye'
    : lang == 'en'
      ? 'story'
      : ''
  const adiLang = `adi${lang.toUpperCase()}` as 'adiEN' | 'adiTR'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative text-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {hikayeler.map(hikaye => (
            <Link
              href={`/${lang}/${path}/${hikaye.url}`}
              key={hikaye.id}
              className="group relative /*bg-white*/ rounded-lg shadow-sm3 /*shadow-sm hover:shadow-md*/ transition-all duration-500 overflow-hidden cursor-pointer transform"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                <Image
                  fill
                  priority
                  sizes="100%"
                  src={`https://d1zgytwt7cl79p.cloudfront.net/tumhikayeler/${hikaye.tema}/${hikaye.folder}/thumb/${hikaye.thumb}`}
                  alt={hikaye[adiLang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="py-2">
                <h3 className="font-medium text-gray-900 text-lg line-clamp-2 group-hover:text-black transition-colors">
                  {hikaye[adiLang]}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{hikaye.pg}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}