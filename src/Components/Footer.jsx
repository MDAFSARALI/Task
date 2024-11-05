import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt40
       text-sm'>
        <div>
            <img src={assets.logo} alt="Logo" className='mb-5 w-32'/>
            <p className='w-full md:w-3/5 text-gray-600'>Welcome to our online store, where luxury meets convenience. Discover premium electronics, stylish dresses, and high-quality shoes crafted to elevate your lifestyle with elegance.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <NavLink to={'/'}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={'/Collection'}>
                    <li>collection</li>
                </NavLink>
                <NavLink to={'/About'}>
                    <li>About Us</li>
                </NavLink>
                <NavLink to={'/Contact'}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><a href="tel:+91">0-123-456-789</a></li>
                <li><a href="mailto:afsarmd.official@gmail.com">afsarmd.official@gmail.com</a></li>
            </ul>
        </div>
       </div>
       <div>
        <hr />
        <p className='py-5 text-sm text-center pt-3'>CopyRight 2024@ Martian Corporation  -All Rights Reserved !</p>
       </div>
    </div>
  )
}

export default Footer
