import ItemCard from '../elements/ItemCard'
import useShopStore from '../store/shopStore'

const ItemsPage = () => {

  const items = useShopStore(state => state.items)
  return (
    <div className='flex flex-col gap-[16px] w-full max-w-[1110px] mx-auto'>
      <div className='flex flex-col justify-center gap-[22px]'>
        <p className='text-[21px] font-semibold text-[#838383]'>Наушники</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-[22px] w-full'>
          {items.filter(item => item.category === 'headphones').map(newItem => (
            <ItemCard key={newItem.id} {...newItem}/>
          ))}           
        </div>

      </div>

      <div className='flex flex-col justify-center gap-[22px]'>
        <p className='text-[21px] font-semibold text-[#838383]'>Беспроводные наушники</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-[22px]'>
          {items.filter(item => item.category === 'wireless_headphones').map(newItem => (
            <ItemCard key={newItem.id} {...newItem}/>
          ))}           
        </div>

      </div>
    </div>
  )
}

export default ItemsPage
