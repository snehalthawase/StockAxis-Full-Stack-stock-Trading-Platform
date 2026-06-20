import React from 'react'
import { IoMdSearch } from "react-icons/io";

function Hero() {
    return (  
        <>
       <div className=' w-full h-60 bg-gray-100' >
        <div className='flex items-center justify-between x-5xl mx-auto px-4 ml-30 '>
            <h1 className='text-4xl font-medium text-gray-800 mt-2'>Support Portal </h1>
            <button className='border-2 border-blue-500 px-5 py-2 bg-blue-500 p-1 rounded hover:bg-black text-white mr-30 mt-8'>My tickets</button>
        </div>
        <div className='x-5xl mx-auto px-30 flex items-center mt-15 '>
           
            <input placeholder='Eg. How do i open my account, How do i activate F&O...'  className='w-full h-15 px-4 border border-gray-300 shadow-sm bg-white focus:outline-none'/>
        </div>
        

</div>

        </>
    );
}

export default Hero;