import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (  
        <>
       <div className='flex gap-4 w-6xl mx-auto px-4 justify-center my-10'>
        <div className='flex-1 '>
          <img src={imageUrl}/>
        </div>
        <div className='flex-1 mt-10 p-8 ml-7'>
        <h1 className='text-2xl font-medium'>{productName}</h1>
        <p className='mt-8 text-gray-700'>{productDescription}</p>
        <div className='flex mt-5'>
            <a href={tryDemo} className='flex  gap-1 mr-8 text-blue-700 items-center   hover:text-black '>Try Demo <FaLongArrowAltRight /></a>
            <a href={learnMore} className='flex gap-1  text-blue-700 items-center  hover:text-black'>Learn More <FaLongArrowAltRight /></a>
        </div>
        <div className='flex gap-2 mt-8'>
        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
        <a href={appStore}><img src="media/images/appstoreBadge.svg" /></a>
        </div>       
        </div>
       </div>

        </>
    );
}

export default LeftSection;