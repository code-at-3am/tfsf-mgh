import { Metadata } from "next"
import hikayelerData from "@/data/hikayeler.json" with {type: 'json'};
import { Hikaye, Lang } from "@/common/types";
import HikayelerView from "@/views/hikayeler";

interface StoriesPageProps {
  params: Promise<{ lang: Lang }>
}

export const metadata: Metadata = {
  title: "Stories - MGH Project",
}

export default async function StoriesPage({params }: StoriesPageProps) {
  const { lang } = await params
  const hikayeler = hikayelerData as Hikaye[]

  if (lang != 'en') {
    return null
  }

  return (
    <HikayelerView
      hikayeler={hikayeler}
      lang={lang} />
  )
}