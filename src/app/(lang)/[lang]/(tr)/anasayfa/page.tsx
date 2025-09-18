import { Banner, Lang, TemaLang } from "@/common/types";
import Anasayfa from "@/views/anasayfa";
import bannersData from "@/data/banners.json" with {type: 'json'};
import themesData from "@/data/temalar.json" with {type: 'json'};
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anasayfa",
}

interface PageProps {
  params: Promise<{ lang: Lang }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const banners = bannersData as Banner[]
  const themes = themesData as TemaLang[]
  return (
    <Anasayfa
      lang={lang}
      banners={banners}
      themes={themes} />
  )
}