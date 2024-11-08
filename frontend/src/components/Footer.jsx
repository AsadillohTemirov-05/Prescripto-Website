import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
{/* Left Section */}
            <div>
            <img src={assets.logo} className='mb-5 w-40' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quam, voluptas magni consequuntur asperiores dolor expedita, quos fugiat hic tempora iure! Provident molestias commodi enim?</p>
            </div>

            {/* Center Section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* Right Section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Copyright text */}
        <div className='py-5 text-sm text-center'>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto-All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
