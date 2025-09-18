import { Lang } from "@/common/types";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return ['tr', 'en'].map(lang => ({ lang }))
}

interface PageProps {
  params: Promise<{ lang: Lang }>
}

export default async function Page({params}: PageProps) {
  const { lang } = await params
  lang == 'tr' && redirect('/tr/anasayfa')
  lang == 'en' && redirect('/en/homepage')
}