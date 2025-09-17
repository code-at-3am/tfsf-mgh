import { Lang } from "@/common/types";
import Hakkinda from "@/views/hakkinda";
import { Metadata } from "next";

interface HakkindaPageProps {
  params: Promise<{ lang: Lang }>
}

export const metadata: Metadata = {
  title: "Proje Hakkında - TFSF Memleketimden Görsel Hikayeler",
}

export default async function HakkindaPage({params }: HakkindaPageProps) {
  const { lang } = await params

  if (lang != 'tr') {
    return null
  }

  return (
    <Hakkinda lang={lang} />
  )
}