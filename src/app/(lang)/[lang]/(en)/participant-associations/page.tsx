import { Dernek, Lang } from "@/common/types";
import { Metadata } from "next";
import derneklerData from "@/data/dernekler.json" with {type: 'json'};
import Dernekler from "@/views/dernekler";

interface AssociationsPageProps {
  params: Promise<{ lang: Lang }>
}

export const metadata: Metadata = {
  title: "Participant Associations - MGH Project",
}

export default async function AssociationsPage({ params }: AssociationsPageProps) {
  const { lang } = await params
  const dernekler = derneklerData as Dernek[]

  if (lang != 'en') {
    return null
  }

  return (
    <Dernekler
      dernekler={dernekler}
      lang={lang} />
  )
}