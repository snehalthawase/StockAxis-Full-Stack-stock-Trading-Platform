import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore,
}) {
    return (  
        <>
      <div className='flex gap-4 w-6xl mx-auto px-4 justify-center items-center'>
              <div className='flex-1'>
              <h1 className='text-2xl font-medium'>{productName}</h1>
              <p className='mt-8 text-gray-700'>{productDescription}</p>
              <div className='flex'>
                  <a href={learnMore} className='flex  gap-1 mr-8 text-blue-700 items-center   hover:text-black '>Learn More <FaLongArrowAltRight /></a>
            </div>      
              </div>
              <div className='flex-1 '>
                <img src={imageUrl}/>
              </div>
             </div>

        </>
    );
}

export default RightSection;