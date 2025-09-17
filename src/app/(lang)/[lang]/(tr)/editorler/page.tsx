import Editorler from "@/views/editorler"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Editörler - TFSF Memleketimden Görsel Hikayeler",
}

export default function Page() {

  return (
    <Editorler lang="tr" />
  )
}
