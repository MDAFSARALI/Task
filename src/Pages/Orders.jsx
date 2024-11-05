import React, { useContext, useEffect, useState } from 'react'
import Title from '../Components/Title'
import { shopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';
const Cart = () => {
  const {products,currency,cartItems,updateQuantity,navigate}=useContext(shopContext);

  const [cartData,setCartData]=useState([]);
  useEffect(()=>{
    const tempData=[];
    for (const items in cartItems) {
      if(cartItems[items] > 0){
        tempData.push({
          _id:items,
          quantity:cartItems[items]
      })
      }
        
      }
      setCartData(tempData)
  },[cartItems])

  return (
    <div className='border-t pt-14'>
      <div className="text-2xl mb-3">
      <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {/* Products Entry */}{
          cartData.map((item,index)=>{
            const productData=products.find((product)=>product._id === item._id)
            return (
              <div className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 " key={index}>
                <div className="flex items-start gap-6">
                    <img src={productData.image[0]} className='w-16 sm:w-20'/>
                    <div>
                      <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                      <div className="flex items-center gap-5 mt-2">
                        <p>Price:{currency}{productData.price}</p>  
                      </div>
                    </div>
                </div>
                <input type="number" min={1}  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' defaultValue={item.quantity} onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,Number(e.target.value))}/>
                <b className='float-right'>{currency}{productData.price*item.quantity}</b>
                <img src={assets.bin_icon} alt="Delete_Product" className='w-4 mr-4 sm:w-5 cursor-pointer ml-6'  onClick={()=>updateQuantity(item._id,0)}/>
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
          <div className="w-full  text-end">
            <button className='bg-black text-white text-sm my-8 px-8 py-3'onClick={()=>navigate('/place-order')} >PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart


