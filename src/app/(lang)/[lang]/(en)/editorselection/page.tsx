import { Hikaye, Lang } from "@/common/types"
import EditorSeckisi from "@/views/editor-seckisi"
import { Metadata } from "next"
import hikayelerData from "@/data/editorsecimi.json" with {type: 'json'};

interface EditorsSelectionPageProps {
  params: Promise<{ lang: Lang }>
}

export const metadata: Metadata = {
  title: "Editor Selection - MGH Project",
}

export default async function EditorsSelectionPage({ params }: EditorsSelectionPageProps) {
  const { lang } = await params
  const hikayeler = hikayelerData as Hikaye[]

  if (lang != 'en') {
    return null
  }
  
  return (
    <EditorSeckisi
      hikayeler={hikayeler}
      lang={lang} />
  )
}