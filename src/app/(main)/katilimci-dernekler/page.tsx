import { Dernek } from "@/common/types";
import { Metadata } from "next";
import derneklerData from "@/data/dernekler.json" with {type: 'json'};
import Dernekler from "@/views/dernekler";

export const metadata: Metadata = {
  title: "Editör Seçkisi - TFSF Memleketimden Görsel Hikayeler",
}

export default function Page() {
  const dernekler = derneklerData as Dernek[]
  return (
    <Dernekler
      dernekler={dernekler} />
  )
}