import { Hikaye, Lang } from "@/common/types";
import hikayelerData from "@/data/editorsecimi.json" with {type: 'json'};
import EditorSeckisi from "@/views/editor-seckisi";
import { Metadata } from "next";

interface EditorSeckisiPageProps {
  params: Promise<{ lang: Lang }>
}

export const metadata: Metadata = {
  title: "Editör Seçkisi - TFSF Memleketimden Görsel Hikayeler",
}

export default async function EditorSeckisiPage({ params }: EditorSeckisiPageProps) {
  const { lang } = await params
  const hikayeler = hikayelerData as Hikaye[]

  if (lang != 'tr') {
    return null
  }

  return (
    <EditorSeckisi
      hikayeler={hikayeler}
      lang={lang} />
  )
}