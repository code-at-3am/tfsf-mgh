import { HikayeDetayLang, Lang } from "@/common/types";
import hikayeler from "@/data/hikayeler.json" with {type: 'json'};
import HikayeView from "@/views/hikaye";

interface PageProps {
  params: Promise<{ lang: Lang, slug: string }>
}

export async function generateStaticParams() {
  return hikayeler.map((hikaye) => ({
    slug: hikaye.url
  }))
}

export default async function Page({ params }: PageProps ) {
  const {lang, slug} = await params
  const hikayeData = hikayeler.find(hikaye => hikaye.url == slug)
  
  if (!hikayeData) {
    return null
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/assets/hikayeler/${hikayeData.tema}/${hikayeData.folder}/hikaye.json`)
  const data: HikayeDetayLang[] = await response.json()
  const hikaye = data[0][lang][0]

  return (
    <HikayeView hikaye={hikaye} />
  )
}