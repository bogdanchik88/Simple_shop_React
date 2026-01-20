import { Link } from 'react-router-dom'
import GlobusIcon from '../assets/Globus.svg'
import VKIcon from '../assets/VK.svg'
import WhatsappIcon from '../assets/Whatsapp.svg'
import TelegramIcon from '../assets/Telegram.svg'
import Button from './Button'

const Footer = () => {
  return (
    <div className='flex justify-between items-start w-full max-w-[1110px] h-full max-h-[150px] p-[22px] shadow-md mx-auto bg-white mt-[22px] rounded-t-[30px]'>
      <Link to="/">
          <p className="text-[25px] font-bold text-[#101010] px-[8px] hover:text-[#838383]
              active:text-[#101010]">QPICK</p>        
      </Link>

      <div className='flex flex-row text-[15px] justify-between w-full max-w-[430px] font-normal'>
        <div className='text-black flex flex-col gap-1'>
          <p className='hover:text-[#838383] cursor-pointer' onClick={() => alert('шывд')}>Избранное</p>
          <p className='hover:text-[#838383] cursor-pointer' onClick={() => alert('шывд')}>Корзина</p>
          <p className='hover:text-[#838383] cursor-pointer' onClick={() => alert('шывд')}>Контакты</p>          
        </div>

        <div className='flex flex-col justify-between max-h-[100px]'>
          <p>Условия сервиса</p>

          <div className='flex flex-row justify-between w-full max-w-[152px]'>
            <img src={GlobusIcon} alt="глобус" />


            <p className='font-medium text-black'>Каз</p>
            <p  className='font-bold text-[#FFA542]'>Рус</p>
            <p className='font-medium text-black'>Eng</p>


          </div>
           
        </div>

     
      </div>

      <div className='flex w-full max-w-[126px] justify-between'>
        <Button img={VKIcon} onClick={() => alert('ща тут вызов добавим')}/>
        <Button img={TelegramIcon} onClick={() => alert('ща тут вызов добавим')}/>
        <Button img={WhatsappIcon} onClick={() => alert('ща тут вызов добавим')}/>      
      </div>

    </div>
  )
}

export default Footer
