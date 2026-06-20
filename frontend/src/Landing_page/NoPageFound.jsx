import React from 'react'
import { Link } from 'react-router-dom';

function NoPageFount() {
    return (  
        <>
           <div className='w-5xl mx-auto px-10 text-center mt-35 mb-15'>
            <h1 className='text-3xl font-medium'>404</h1>
            <p className='text-xl mt-2 mt-3'>We couldn’t find the page you were looking for.</p>
            <p className='text-xl mt-2 mt-3'>
            <Link to="/" className='text-blue-600 hover:text-black'>Visit Zerodha’s home page</Link></p>   
        </div>
        </>
    );
}

export default NoPageFount;