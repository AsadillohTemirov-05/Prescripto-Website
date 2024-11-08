import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] border rounded-2xl' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam accusamus iste id similique reiciendis natus esse quisquam laborum distinctio, aliquid maxime molestias voluptatem cum ad, eos repellendus veritatis, animi culpa. Laborum fugiat aperiam autem perspiciatis, sequi eveniet! Consectetur, non.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quidem. Suscipit vitae sapiente id delectus adipisci quia odio tempora? Id quas hic accusantium cupiditate cum ratione deleniti recusandae similique exercitationem!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa, cupiditate quas at similique tempore amet magnam eveniet corrupti quidem deleniti eius quis laudantium optio?</p>
        </div>
      </div>
      <div className='text-xl my-4 '>
        <p>WHY <span  className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>
        <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
