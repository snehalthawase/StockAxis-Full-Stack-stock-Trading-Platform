 import React from 'react'

function Hero() {
    return (  
        <>
        <div className='w-5xl mx-auto px-10 text-center'>
            <img src="media/images/homeHero.png" className='mt-14 mb-5' alt='Hero Image'/>
            <h1 className='text-3xl font-semibold'>Invest in everything</h1>
            <p className='text-xl mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <br />
            <button className='mt-3 border-2 border-blue-500 min-w-40 col bg-blue-500 p-1 rounded mb-10 hover:bg-black text-white'>Sign up for free</button>
        </div>
        </>
    );
}

export default Hero;