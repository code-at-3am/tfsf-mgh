import { Hikaye, Lang } from "@/common/types"
import EditorSeckisi from "@/views/editor-seckisi"
import { Metadata } from "next"
import hikayelerData from "@/data/editorsecimi.json" with {type: 'json'};

export const metadata: Metadata = {
  title: "Editor Selection",
}

interface PageProps {
  params: Promise<{ lang: Lang }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const hikayeler = hikayelerData as Hikaye[]  
  return (
    <EditorSeckisi
      hikayeler={hikayeler}
      lang={lang} />
  )
}