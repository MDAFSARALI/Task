import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";
export const shopContext=createContext()

const shopContextProvider=(props)=>{
    const currency='₹';
    const delivery_fee=40;
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)
    const [cartItems,setCartItems]=useState({});
    const navigate=useNavigate()


    const addToCart=async(itemId)=>{
        // It is used to copy the object of cartItems
        let cartData=structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId]+=1;
        }
        else{
            cartData[itemId]={};
            cartData[itemId]=1;
        }
        setCartItems(cartData)
    }


    const getCartCount=()=>{
        let TotalCount=0;
        for (const items in cartItems) {
            try {
                
                if(cartItems[items]>0){
                    TotalCount+=cartItems[items];
                }

            } catch (error) {
                
            }
        }
        return TotalCount;

    }

    const updateQuantity=async(itemId,quantity)=>{
        let cartData=structuredClone(cartItems);

        cartData[itemId]=quantity;
        setCartItems(cartData);

    }

    const getCartAmount=()=>{
        let totalAmount=0;
        for (const items in cartItems) {
            let itemInfo=products.find((product)=> product._id === items)
                try {
                    if(cartItems[items] > 0){
                        totalAmount+= itemInfo.price*cartItems[items]
                    }
                } catch (error) {
                    
                }
        }
        return totalAmount;
    }
    





    const value={
        products,
        currency,delivery_fee,search,
        setSearch,showSearch,setShowSearch
        ,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    }
    return (
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}

export default shopContextProvider