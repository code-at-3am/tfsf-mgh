import { Hikaye } from "@/common/types";
import hikayelerData from "@/data/hikayeler.json" with {type: 'json'};
import HikayelerView from "@/views/hikayeler";

export default function HikayelerPage() {
  const hikayeler = hikayelerData as Hikaye[]
  return (
    <HikayelerView
      hikayeler={hikayeler} />
  )
}