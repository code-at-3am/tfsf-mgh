import { PropsWithChildren } from "react";

export const dynamicParams = false

export async function generateStaticParams() {
  return ['en'].map(lang => ({ lang }))
}

export async function generateMetadata() {
  return {
    title: {
      template: '%s - MGH Project',
      default: 'MGH Project'
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
