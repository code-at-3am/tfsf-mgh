import { Hikaye, Lang } from "@/common/types";
import hikayelerData from "@/data/hikayeler.json" with {type: 'json'};
import HikayelerView from "@/views/hikayeler";
import { Metadata } from "next";

interface HikayelerPageProps {
  params: Promise<{ lang: Lang }>
}

export const metadata: Metadata = {
  title: "Hikayeler - TFSF Memleketimden Görsel Hikayeler",
}

export default async function HikayelerPage({ params }: HikayelerPageProps) {
  const { lang } = await params
  const hikayeler = hikayelerData as Hikaye[]

  if (lang != 'tr') {
    return null
  }
  
  return (
    <HikayelerView
      hikayeler={hikayeler}
      lang={lang} />
  )
}