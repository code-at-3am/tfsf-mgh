import { Dernek, Lang } from "@/common/types"
import Image from "next/image"

interface DerneklerProps {
  dernekler: Dernek[]
  lang: Lang
}

export default function Dernekler({ dernekler, lang }: DerneklerProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative text-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text">
              {lang == 'tr' && 'Katılımcı Dernekler'}
              {lang == 'en' && 'Participant Associations'}
            </h1>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dernekler.map((data, i) => (
            <div key={data.id} className="group /*bg-white*/ rounded-lg transition-all duration-500 overflow-hidden transform">
              {/* Image Container */}
              <div className="p-4 rounded-lg shadow-sm hover:shadow-md bg-white">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    fill
                    src={`/assets/dernekler/${data.logo}`}
                    alt={data.adi}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="py-2">
                <h3 className="font-medium text-gray-900 text-lg line-clamp-2 group-hover:text-black transition-colors">
                  {data.adi}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}