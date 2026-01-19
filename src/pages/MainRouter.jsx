import { Route, Routes } from 'react-router-dom'
import ItemsPage from './itemsPage'
import Basket from './Basket'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<ItemsPage/>} />
        <Route path='/basket' element={<Basket/>} />
    </Routes>
  )
}

export default MainRouter
