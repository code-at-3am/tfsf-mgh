import { Hikaye, HikayeDetay } from "@/common/types";
import hikayelerData from "@/data/hikayeler.json" with {type: 'json'};
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>
}

const hikayeler = hikayelerData as Hikaye[]

export async function generateStaticParams() {
  return hikayeler.map((hikaye) => ({
    slug: hikaye.url
  }))
}

export default async function Page({ params }: PageProps ) {
  const {slug} = await params
  const hikaye = hikayeler.find(hikaye => hikaye.url == slug)


  if (!hikaye) {
    return null
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/assets/hikayeler/${hikaye.tema}/${hikaye.folder}/hikaye.json`)
  const data: HikayeDetay[] = await response.json()

  const detay = data[0].tr[0] // Assuming Turkish for now

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative text-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
              {detay.adi}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full flex justify-center mb-16 px-0 md:px-4">
        <div className="relative max-w-4xl w-full">
          <Image
            width={1200}
            height={800}
            src={`/assets/hikayeler/${detay.galeri[0].big}`}
            alt={detay.adi}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="[&>p]:pb-4 text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: detay.metin }} />
      </div>

      {/* Photographer Info */}
      {(detay.ozgecmisfoto || (detay.ozgecmis && detay.ozgecmis.length > 0)) && (
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fotoğrafçı</h2>
            <div className="flex items-start space-x-4">
              {/* {(detay.ozgecmisfoto || (detay.ozgecmis && detay.ozgecmis[0].foto)) && (
                <Image

                  width={500}
                  height={300}
                  src={`/assets/fotografcilar/${detay.ozgecmisfoto}`}
                  alt={detay.ozgecmis && detay.ozgecmis[0].adi || "Fotoğrafçı"}
                  className="w-24d h-24 object-covers flex-shrink-0"
                />
              )} */}
              <div className="flex-1">
                {detay.ozgecmis && detay.ozgecmis.length > 0 && (
                  <>
                    <h3 className="text-xl font-medium text-gray-900">{detay.ozgecmis[0].adi}</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">{detay.ozgecmis[0].metin}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 MGH TFSF - Tüm hakları saklıdır
          </p>
        </div>
      </footer>
    </div>
  )
}