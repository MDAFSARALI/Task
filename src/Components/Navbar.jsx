import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { shopContext } from '../Context/ShopContext'
const Navbar = () => {
  const [visible,setVisible]=useState(false)
  const {setShowSearch,getCartCount} = useContext(shopContext)
  return (
    <div className='flex items-center justify-between py-5 font-medium '>
    <Link to={'/'}><img src={assets.logo} alt="Logo" className='w-36'/></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/Collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTIONS</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/About' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

    <div className="flex items-center gap-6 z-50">
      <img src={assets.search_icon} alt="search_icon"  className='w-5 cursor-pointer' onClick={()=>setShowSearch(true) }/>
      <div className="group relative">
      <Link to={'/login'}><img src={assets.profile_icon} alt="Profile" className='w-5 cursor-pointer' /></Link>
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>LogOut</p>
          </div>
        </div>
      </div>
      <Link to='/Cart' className='relative'>
        <img src={assets.cart_icon} alt="Cart_Icon" className='w-5 min-w-5'/>
        <p className='absolute right-[-10px] bottom-[-10px] w-4 leading-4 bg-black text-white aspect-square rounded-full text-[8px] text-center'>{getCartCount()}</p>
      </Link>
      <img src={assets.menu_icon} alt="menu_icon" className='w-5 cursor-pointer sm:hidden' onClick={()=> setVisible(true)} />
    </div>
    {/*  Sidebar menu for small screen when user click on the sidebar menu_icon*/}
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={()=> setVisible(false)} >
            <img src={assets.dropdown_icon} alt="Close_DropDown_Img" className='h-4 rotate-180'/>
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/Collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/About'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/Contact'>CONTACT</NavLink>
        </div>
    </div>
    </div>
  )
}

export default Navbar
