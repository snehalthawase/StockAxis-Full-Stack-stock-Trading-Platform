import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


function Education() {
    return (  
         <>
                <div className='flex w-6xl mx-auto px-2 mt-30 '>
                    <div className='flex-1'>
                        <img src="media/images/education.svg"/>
                      
                    </div>
                    <div className='flex-1 mt-7'>
                      <h1 className='text-2xl font-medium mb-10 ' >Free and open market education</h1>
                      
                      <p className='text-base text-gray-600 mt-1.5 mb-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                      <a href="" className='flex  gap-1 mr-3 text-blue-400 items-center  hover:text-black'>Varsity <FaLongArrowAltRight /></a>
                      
                      <p  className='text-base text-gray-600 mt-1.5 mt-6 mb-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                      <a href="" className='flex  gap-1 mr-3 text-blue-400 items-center  hover:text-black'>TradingQ&A <FaLongArrowAltRight /></a>
                      
                    </div>
                </div>
                </>
    );
}

export default Education;