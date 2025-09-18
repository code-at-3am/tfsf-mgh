import { Lang } from "@/common/types";
import Hakkinda from "@/views/hakkinda";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proje Hakkında",
}

interface PageProps {
  params: Promise<{ lang: Lang }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  return (
    <Hakkinda lang={lang} />
  )
}