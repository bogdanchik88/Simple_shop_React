import { Link, useNavigate } from 'react-router-dom'
import CartIcon from '../assets/Basket.svg'
import FavIcon from '../assets/Favourites.svg'
import Button from './Button'
import useShopStore from '../store/shopStore'
import Logo from './Logo'

const NavBar = () => {

  const navigate = useNavigate()
  //const basketCount = useShopStore(state => state.basket.reduce((sum, i) => sum + i.quantity, 0)) если нужны все товары
  const basketCount = useShopStore(state => state.basket.length)

  const goToBasket = () => {
    navigate('/basket')
  }

  const goToFavs = () => {
    alert('Пока в разработке')
  }
  
  return (
    <div className="flex justify-between items-center w-full max-w-[1110px] mx-auto px-4">

        <Logo/>

        <div className='flex flex-row justify-between items-center gap-[16px] px-[8px] py-[16px]'>

            <Button img={FavIcon} onClick={goToFavs} />

            {/* Корзина с бейджем */}
            <div className="relative size-[24px]">
              <Button img={CartIcon} onClick={goToBasket} />
              
              {basketCount > 0 && (
                <span className="absolute -top-1 -right-1 size-[18px] bg-[#FFA542] text-white text-[15px] font-semibold rounded-full flex items-center justify-center">
                  {basketCount}
                </span>
              )}
            </div>

        </div> 
    </div>
  )
}

export default NavBar
