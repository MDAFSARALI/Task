import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="About_Image" className='w-full md:max-w-[450px]' />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Welcome to <b>Martian Corporation</b>, where fashion meets sophistication. We specialize in delivering high-quality watches, stylish clothing, and shoes that cater to a variety of tastes and occasions. Our focus is on offering products that not only look great but also feel comfortable and last.</p>
            <p>Quality and customer satisfaction are at the heart of everything we do. From the selection of materials to the design of each item, we prioritize products that will not only meet but exceed your expectations. With [Your Brand Name], you can trust that you're getting the best in style and durability.</p>
            <b className='text-gray-800'>OUR MISSION</b>
            <p>Our mission is to make stylish, high-quality fashion accessible to everyone. We carefully curate each item, ensuring it meets our standards for quality, style, and durability. At Martian Corporate, we aim to provide a shopping experience that is as enjoyable and satisfying as the products we sell.</p>
          </div>
      </div>

        <div className="text-xl py-4">
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
            <div className="border px-10 md:py-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Quality Assurance : </b>
              <p className='text-gray-600'>
              Ensuring top quality, every product is rigorously inspected to meet high standards, guaranteeing durability, style, and customer satisfaction.</p>
            </div>
            <div className="border px-10 md:py-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Convenience: </b>
              <p className='text-gray-600'>Enjoy a seamless shopping experience with easy navigation, secure payment options, and fast shipping for all your fashion needs.</p>
            </div>
            <div className="border px-10 md:py-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Exceptional Customer Service: </b>
              <p className='text-gray-600'> Our dedicated team is here to assist you, providing personalized support and prompt responses to enhance your shopping experience.</p>
            </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About
