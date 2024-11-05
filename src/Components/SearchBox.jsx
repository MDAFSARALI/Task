import React, { useContext, useDebugValue, useEffect, useState } from 'react'
import { shopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBox = () => {
    const {search,setSearch,showSearch,setShowSearch} =useContext(shopContext)
    const [visible,setVisible]=useState(false);
    const location =useLocation();
    useEffect(()=>{
        if(location.pathname.includes('Collection')){
            setVisible(true);
        }
        else{
            setVisible(false)
        }
    },[location,visible,setVisible])
  return showSearch  && visible? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className="inline-flex items-center justify-center border border-gray-400 py-2 px-5 mx-3 my-5 rounded-full w-3/4 sm:w-1/2">
        <input type="text" placeholder='Search Item' className='flex-1 outline-none bg-inherit text-sm '  value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <img src={assets.search_icon} alt="Search_Icon" className='w-4' />
      </div>
      <img src={assets.cross_icon} alt="Close_Search" className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)}/>
    </div>
  ) : null
}

export default SearchBox
