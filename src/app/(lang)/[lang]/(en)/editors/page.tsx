import Editorler from "@/views/editorler"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Editors - MGH Project",
}

export default function Page() {

  return (
    <Editorler lang="en" />
  )
}