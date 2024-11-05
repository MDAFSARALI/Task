import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../src/index.css';
import '../../src/src.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide><NavLink to={'/Collection'}><img src={assets.Home_banner_1} alt="Hero_Image" className='w-full sm:w-1/2 cursor-pointer' /></NavLink></SwiperSlide>
        <SwiperSlide><NavLink to={'/Collection'}><img src={assets.Home_banner_2} alt="Hero_Image" className='w-full sm:w-1/2 cursor-pointer' /></NavLink></SwiperSlide>
        <SwiperSlide><NavLink to={'/Collection'}><img src={assets.Home_banner_3} alt="Hero_Image" className='w-full sm:w-1/2 cursor-pointer' /></NavLink></SwiperSlide>
        <SwiperSlide><NavLink to={'/Collection'}><img src={assets.Home_banner_4} alt="Hero_Image" className='w-full sm:w-1/2 cursor-pointer' /></NavLink></SwiperSlide>
        <SwiperSlide><NavLink to={'/Collection'}><img src={assets.Home_banner_5} alt="Hero_Image" className='w-full sm:w-1/2 cursor-pointer' /></NavLink></SwiperSlide>
        <SwiperSlide><NavLink to={'/Collection'}><img src={assets.Home_banner_6} alt="Hero_Image" className='w-full sm:w-1/2 cursor-pointer' /></NavLink></SwiperSlide>
        <SwiperSlide><NavLink to={'/Collection'}><img src={assets.Home_banner_7} alt="Hero_Image" className='w-full sm:w-1/2 cursor-pointer' /></NavLink></SwiperSlide>
        <SwiperSlide><NavLink to={'/Collection'}><img src={assets.Home_banner_8} alt="Hero_Image" className='w-full sm:w-1/2 cursor-pointer' /></NavLink></SwiperSlide>
        <SwiperSlide><NavLink to={'/Collection'}><img src={assets.Home_banner_9} alt="Hero_Image" className='w-full sm:w-1/2 cursor-pointer' /></NavLink></SwiperSlide>
      </Swiper>
    </>
  );
}
