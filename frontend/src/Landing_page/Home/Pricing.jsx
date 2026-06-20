import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"

function Pricing() {
    return (  
        <>
      <>
        <div className='flex w-6xl mx-auto px-8 mt-25'>
            <div className='flex gap-12'>
                <div className='flex-5'>
                    <h2 className='text-2xl font-medium text-gray-600'>Unbeatable pricing</h2>
                    <p className='mt-2 '> 
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="" className='flex  gap-1 mr-3 text-blue-400 items-center  hover:text-black mt-3'>See pricing <FaLongArrowAltRight /></a>
                
                </div>
                <div className='flex-1'></div>
                <div className='flex-6'>
                   <img src="media/images/price_home.png " className='mt-4'  />
                </div>
            </div>
        </div>
        </>
        </>
    );
}

export default Pricing;