import { Metadata } from "next";
import derneklerData from "@/data/dernekler.json" with {type: 'json'};
import { Dernek, Lang } from "@/common/types";
import Dernekler from "@/views/dernekler";

export const metadata: Metadata = {
  title: "Participant Associations",
}

interface PageProps {
  params: Promise<{ lang: Lang }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const dernekler = derneklerData as Dernek[]
  return (
    <Dernekler
      dernekler={dernekler}
      lang={lang} />
  )
}