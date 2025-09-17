import { Lang } from "@/common/types"
import Hakkinda from "@/views/hakkinda"
import { Metadata } from "next"

interface AboutPageProps {
  params: Promise<{ lang: Lang }>
}

export const metadata: Metadata = {
  title: "About Project - MGH Project",
}

export default async function AboutPage({params}: AboutPageProps) {
  const { lang } = await params

  if (lang != 'en') {
    return null
  }

  return (
    <Hakkinda lang={lang} />
  )
}