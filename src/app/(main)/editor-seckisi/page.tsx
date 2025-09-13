import List, { ListData } from "@/component/page/editor-seckisi/list";

interface PageProps {

}

const items: ListData[] = [
  {
    image: 'https://mgh.tfsf.org.tr/tumhikayeler/06_gecmisten_gelen/12/ates_komur_ve_duman_1.jpg',
    title: 'Ateş, Kömür ve Duman',
    author: 'Ümmügülsüm GÜNEŞ',
    association: 'MFD'
  },
  {
    image: 'https://mgh.tfsf.org.tr/tumhikayeler/02_gokkusagi_hikayeleri/02/muamma_1.jpg',
    title: 'Muamma',
    author: 'Hatice ATAÇ',
    association: 'MFD'
  },
  {
    image: 'https://mgh.tfsf.org.tr/tumhikayeler/07_degisenlere_bakanlar/02/muze_carsi_1.jpg',
    title: 'Müze Çarşı',
    author: 'Fatma GÖKMEN',
    association: 'FSK'
  }
]

export default function Page({ }: PageProps) {

  return (
    <>
      <List items={items} />
    </>
  )
}