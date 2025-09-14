import { Hikaye } from "@/common/types";
import hikayelerData from "@/data/editorsecimi.json" with {type: 'json'};
import EditorSeckisi from "@/views/editor-seckisi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editör Seçkisi - TFSF Memleketimden Görsel Hikayeler",
}

export default function Page() {
  const hikayeler = hikayelerData as Hikaye[]
  return (
    <EditorSeckisi
      hikayeler={hikayeler} />
  )
}