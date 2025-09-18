import Editorler from "@/views/editorler"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Editörler",
}

export default function Page() {
  return (
    <Editorler lang="tr" />
  )
}
