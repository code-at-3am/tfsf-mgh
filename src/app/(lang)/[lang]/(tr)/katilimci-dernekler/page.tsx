import { Dernek, Lang } from "@/common/types";
import { Metadata } from "next";
import derneklerData from "@/data/dernekler.json" with {type: 'json'};
import Dernekler from "@/views/dernekler";

interface DerneklerPageProps {
  params: Promise<{ lang: Lang }>
}

export const metadata: Metadata = {
  title: "Katılımcı Dernekler - TFSF Memleketimden Görsel Hikayeler",
}

export default async function DerneklerPage({ params }: DerneklerPageProps) {
  const { lang } = await params
  const dernekler = derneklerData as Dernek[]

  if (lang != 'tr') {
    return null
  }

  return (
    <Dernekler
      dernekler={dernekler}
      lang={lang} />
  )
}