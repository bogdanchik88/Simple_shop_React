import useShopStore from '../store/shopStore'
import TrashIcon from '../assets/Trash.svg'
import PlusIcon from '../assets/Plus.svg'
import MinusButton from '../assets/Minus.svg'
import Button from './Button'

const BasketCard = ({id, title, price, discountPrice, hasDiscount, img, quantity}) => {

  const addToBasket = useShopStore(state => state.addToBasket)
  const removeFromBasket = useShopStore(state => state.removeFromBasket)
  const deleteFromBasket = useShopStore(state => state.deleteFromBasket)
  return (
    <div className='bg-white shadow-md p-[16px] rounded-[30px] box-border max-h-[233px]'>

      <div className='flex flex-row justify-between'>

        <div className='flex flex-row items-center gap-[16px]'>
          <div>
            <img src={img} className='w-[117px] h-[121px] md:w-[136px] md:h-[146px] object-contain pb-[16px]' />

            <div className='flex flex-row items-center justify-center gap-[15px] md:gap-[30px]'>

              <Button onClick={() => removeFromBasket(id)} img={MinusButton}/> 
              <p className='text-[17px] font-semibold text-black'>{quantity}</p>             
              <Button onClick={() => addToBasket(id)} img={PlusIcon}/> 
               
            </div>
       
          </div>

          <div className='flex flex-col gap-[10px]'>
            <p className='text-[15px] font-medium text-[#1C1C27]'>Название: {title}</p>  
            <p className='text-[15px] text-[#AAAAAA] font-semibold'>{ hasDiscount ? discountPrice : price } ₽</p>          
          </div>

        </div>

        <div className='flex flex-col justify-between items-end'>
          <Button img={TrashIcon} onClick={() => deleteFromBasket(id)}/>
          <p className='font-semibold text-[#1C1C27] text-[15px]'>Цена: {(hasDiscount ? discountPrice : price) * quantity} ₽</p>
        </div>

      </div>

    </div>
  )
}

export default BasketCard
