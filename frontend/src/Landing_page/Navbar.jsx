import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Navbar() {
    return (  
        <>
        <nav className='flex gap-10 items-center justify-around px-6 py-5 border-b border-gray-200 sticky top-0 bg-white z-50 '>
         <div > 
        <Link to="/">
                <img src="media/images/logo.svg" alt="" className='w-32'/>
         </Link>    
         </div>
         <div className='flex gap-8 items-center'>
        
        <Link to="/signUp" className=' text-black  '>Signup </Link>
        
        <Link  to="/about" className=' text-black '>About </Link>
        
        <Link  to="/product" className=' text-black'>Product </Link>
        <Link  to="/pricing" className=' text-black'>Pricing </Link>
        <Link to="/support" className=' text-black'>Support</Link>
        <RxHamburgerMenu />
         </div>
        </nav>
        </>
    );
}

export default Navbar;