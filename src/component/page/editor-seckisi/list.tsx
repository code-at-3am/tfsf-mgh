
interface ListProps {
  items: ListData[]
}

export interface ListData {
  image: string
  title: string
  author: string
  association: string
}

export default function List({ items }: ListProps) {

  return (
    <>
      <div>
        <h1 className="py-6 text-3xl">Editör Seçkisi</h1>
      </div>
      <div className="flex">
        {items.map(item => (
          <Item item={item} key={item.title} />
        ))}
      </div>
    </>
  )
}

interface ItemProps {
  item: ListData
}

function Item({ item }: ItemProps) {

  return (
    <div className="p-2 font-sans">
      <img src={item.image} alt={item.title} className="w-60 h-40" />
      <div className="text-[19px] font-semibold">{item.title}</div>
      <div className="text-[12px] text-gray-700">{item.author} - {item.association}</div>
    </div>
  )

}