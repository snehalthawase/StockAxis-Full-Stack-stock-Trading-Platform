import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Stats() {
    return (  
        <>
        <div className='flex w-6xl mx-auto px-3 mt-30 '>
            <div className='flex-1'>
              <h1 className='text-2xl font-medium mb-10'>Trust with confidence</h1>
              <h2 className='text-lg font-normal ' >Customer-first always</h2>
              <p className='text-base text-gray-600 mt-1.5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
              <h2  className='text-lg font-normal mt-6'>No spam or gimmicks</h2>
              <p  className='text-base text-gray-600 mt-1.5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span className='text-blue-300'>Our philosophies.</span> </p>
              <h2 className='text-lg font-normal mt-6' >The Zerodha universe</h2>
              <p  className='text-base text-gray-600 mt-1.5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
              <h2 className='text-lg font-normal mt-6' >Do better with money</h2>
              <p  className='text-base text-gray-600 mt-1.5'> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='flex-1'>
                <img src="media/images/ecosystem.png"/>
               <div className='flex justify-center gap-4'>
    <a href="" className='flex  gap-1 mr-3 text-blue-400 items-center  hover:text-black'>Explore our products <FaLongArrowAltRight /></a>
    <a href="" className='flex gap-1  text-blue-400 items-center  hover:text-black'>Try Kite demo <FaLongArrowAltRight /></a>
</div>
            </div>
        </div>
        </>
    );
}

export default Stats;