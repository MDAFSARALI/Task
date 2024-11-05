import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

    const ProductItem = ({id,image,name,price,rating}) => {
    const {currency}=useContext(shopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer ml-3'>
      <div className='overflow-hidden'>
        <img src={image[0]} alt="Image_0" className='hover:scale-110 transition-none ease-in-out h-[250px] w-[350px]'/>
      </div>
      <p className='pt-3 pb-1 text-sm'> {name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
      <div className="flex items-center gap-1 mt-2 text-lg">
         <p className='text-base'>{rating}</p><img src={assets.star_icon} alt="star_icon" className="w-3.5"/>
         <button className='bg-black text-white px-2 ml-10 rounded py-1 text-sm'>Buy Now</button>
      </div>
    </Link>
  )
}

export default ProductItem
