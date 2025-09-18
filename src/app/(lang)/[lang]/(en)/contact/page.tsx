import { Lang } from "@/common/types"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
}

interface PageProps {
  params: Promise<{ lang: Lang }>
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  return (
    <></>
  )
}