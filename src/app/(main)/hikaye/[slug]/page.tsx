import { Hikaye, HikayeDetay } from "@/common/types";
import hikayelerData from "@/data/hikayeler.json" with {type: 'json'};
import HikayeView from "@/views/hikaye";

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
  console.log('data: ', data)

  return (
    <HikayeView hikaye={data[0]} />
  )
}