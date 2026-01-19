import StarIcon from '../assets/Star.svg'
import useShopStore from '../store/shopStore'

const ItemCard = ({ id, img, title, price, hasDiscount, discountPrice, rating }) => {

  const addToBasket = useShopStore(state => state.addToBasket)
  return (
    <div className="
        box-border
        w-full
        mx-auto
        max-w-[350px] 
        bg-white
        box-border
        flex
        flex-col
        justify-center
        items-center
        rounded-[30px]
        py-[24px]
        px-[16px]
        shadow-md
      ">
      <img src={img} alt="" className="w-[150px] h-[157px] md:w-[220px] md:h-[238px] mb-[30px] object-contain"/>

      <div className="flex flex-col justify-between w-full gap-[16px]">

        <div className="flex flex-row justify-between">
          <p className="text-[17px] font-semibold">{title}</p>

          <div className='flex flex-col items-center justify-start gap-0'>
            <p className="text-[17px] font-semibold text-[#FFA542] leading-[1]">{ hasDiscount? discountPrice : price} ₽</p>
            <p
              className={`
                text-[13px] text-[#FFCE7F] line-through
                ${hasDiscount ? 'opacity-100' : 'opacity-0'}
              `}
            >{price} ₽</p>
          </div>
     
        </div>

        <div className="flex flex-row justify-between">

          <div className="flex flex-row gap-[8px]">
            <img src={StarIcon} className='w-[23px] h-[22px] hover:text-black'/>               
            <p className="text-[17px] font-semibold text-[#838383]">{rating}</p>
          </div>
          <button className="text-[17px] font-semibold text-[#1C1C27]
            hover:scale-[110%] hover:text-[#FFA542]
            active:scale-[100%] active:text-[#1C1C27]"
            onClick={() => addToBasket(id)}>Купить</button>
        </div>        

      </div>

    </div>
  )
}

export default ItemCard
