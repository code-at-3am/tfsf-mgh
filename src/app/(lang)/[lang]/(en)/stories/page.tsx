import { Metadata } from "next"
import hikayelerData from "@/data/hikayeler.json" with {type: 'json'};
import { Hikaye, Lang } from "@/common/types";
import HikayelerView from "@/views/hikayeler";

export const metadata: Metadata = {
  title: "Stories",
}

interface PageProps {
  params: Promise<{ lang: Lang }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const hikayeler = hikayelerData as Hikaye[]
  return (
    <HikayelerView
      hikayeler={hikayeler}
      lang={lang}
      path="story" />
  )
}