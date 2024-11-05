import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
  const {productId}=useParams();
  const {products,currency,addToCart}=useContext(shopContext);
  const [productData,setProductData]=useState();
  const [image,setImage]=useState('');

  const fetchProductData=async ()=>{
      products.map((item)=>{
        if(item._id===productId){
          setProductData(item);
          setImage(item.image[0]);
          return null;
        }
      })
  }

  useEffect(()=>{
    fetchProductData()
  },[productId,products])

  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
    {/* ---------------------Product Data------------------------ */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* -----------Product Images-------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item,index)=>(
                <img src={item} key={index} alt='Item_Image' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' onClick={()=>setImage(item)}/>
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="main_Product" className='w-full h-auto'/>
          </div>
        </div>
        {/* -------------Product Info--------- */}
        <div className="flex-1 ">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>{122}</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
          <p className='pl-2'>Total sells : {productData.sells} </p>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700' onClick={()=>addToCart(productData._id)}>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className="text-sm text-gray-500 mt-5 flex-col gap-1">
            <p>100% Original products.</p>
            <p>Cash on delivery is available.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ------------------Description and review Section----------------- */}
      <div className="mt-20">
            <div className="flex">
              <p className="border px-5 py-3 text-sm">Description</p>
              <p className="border px-5 py-3 text-sm text-gray-500 cursor-pointer">Reviews  160</p>
            </div>
            <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minima repudiandae quia provident numquam, molestias nam ducimus, neque officia molestiae deserunt. Aspernatur consequatur quis dignissimos.</p>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste qui accusamus, nisi corrupti sapiente.</p>
            </div>
      </div>
      {/* ----------------------Related Products--------------- */}
            <RelatedProducts category={productData.category} type={productData.type}/>
    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product
