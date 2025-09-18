import temalar from "@/data/temalar.json" with {type: 'json'};
import hikayeler from "@/data/hikayeler.json" with {type: 'json'};
import TemaView from "@/views/temalistesi";
import { Lang } from "@/common/types";

interface PageProps {
  params: Promise<{ lang: Lang, slug: string }>
}

export async function generateStaticParams() {
  return temalar[0].tr.map((tema) => ({
    slug: tema.klasor
  }))
}

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params
  const hikayeDataList = hikayeler.filter(hikaye => hikaye.tema == slug)
  const title = temalar[0][lang].find(tema => tema.klasor == slug)?.adi ?? ''

  return (
    <TemaView
      hikayeler={hikayeDataList}
      lang={lang}
      title={title} />
  )
}
