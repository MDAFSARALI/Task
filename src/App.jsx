import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBox from './Components/SearchBox'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:[9vw]'>
    <ToastContainer/>
    <Navbar/>
    <SearchBox/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Product/:productId' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='orders' element={<Orders/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App