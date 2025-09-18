import { PropsWithChildren } from "react";

export const dynamicParams = false

export async function generateStaticParams() {
  return ['tr'].map(lang => ({ lang }))
}

export async function generateMetadata() {
  return {
    title: {
      template: '%s - TFSF Memleketimden Görsel Hikayeler',
      default: 'TFSF Memleketimden Görsel Hikayeler'
    }
  }
}

export default async function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      {children}
    </>
  )
}
