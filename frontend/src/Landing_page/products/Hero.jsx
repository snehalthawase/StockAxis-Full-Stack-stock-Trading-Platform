import React from 'react'


function Hero() {
    return (  
        <>
       <div className='w-5xl mx-auto px-10 text-center mt-20  border-b border-gray-100 h-50'>
            <h1 className='text-3xl font-semibold'>Zerodha Products</h1>
            <p className='text-xl mt-2 text-gray-700'>Sleek, modern, and intuitive trading platforms</p>
            <p className='text-lg text-gray-600 mt-4'>Check out our
            <a href="" className=' text-blue-700  hover:text-black '> investment offerings →</a>
           </p>
        </div>
        </>
    );
}

export default Hero;