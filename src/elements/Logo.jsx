import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
        <p className="text-[25px] font-bold text-[#101010] px-[8px] py-[16px] hover:text-[#838383]
            active:text-[#101010]">QPICK</p>        
    </Link> 
  )
}

export default Logo
