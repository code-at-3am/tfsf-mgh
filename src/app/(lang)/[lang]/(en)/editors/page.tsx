import { Lang } from "@/common/types"
import Editorler from "@/views/editorler"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Editors",
}

interface PageProps {
  params: Promise<{ lang: Lang }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  return (
    <Editorler lang={lang} />
  )
}