import React from 'react'


function Universe() {
    return (  
        <>
       <div className='w-5xl mx-auto px-10 text-center mt-25'>
        <h3 className='text-xl mb-20 text-gray-600'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h3>
            <h1 className='text-3xl font-semibold'>The Zerodha Universe</h1>
            <p className='text-lg text-gray-600 mt-5'>Extend your trading and investment experience even further with our partner platforms</p>
            <br /> 
            <div className='flex gap-3 items-center'>
                <div className='flex-1 p-10'>
                  <img src="media/images/zerodhaFundhouse.png" style={{width:"70%" , marginLeft:"2rem"}} alt="" />
                  <p className='text-sm test-gray-600 mb-15 mt-8 '>Our asset management venture
                     that is creating simple and transparent index
                     funds to help you save for your goals.</p>
                  <img src="media/images/streakLogo.png" style={{width:"50%" , marginLeft:"2rem"}} alt="" />
                  <p className='text-sm test-gray-600 mb-15 mt-8 '>Systematic trading platform
                   that allows you to create and backtest
                   strategies without coding.</p>
                </div>
    
                 <div className='flex-1 p-10'>
                  <img src="media/images/sensibullLogo.svg" style={{width:"70%", marginLeft:"2rem"}} alt="" />
                  <p className='text-sm test-gray-600 mb-15 mt-8 '>Our asset management venture
                     that is creating simple and transparent index
                     funds to help you save for your goals.</p>
                  <img src="media/images/smallcaseLogo.png" style={{marginLeft:"2rem"}} />
                  <p className='text-sm test-gray-600 mb-15 mt-8 '>Systematic trading platform
                   that allows you to create and backtest
                   strategies without coding.</p>
                </div>

                <div className='flex-1 p-10'>
                  <img src="media/images/tijori.svg" style={{width:"50%" , marginLeft:"2rem"}}  />
                  <p className='text-sm test-gray-600 mb-15 mt-8 '>Our asset management venture
                     that is creating simple and transparent index
                     funds to help you save for your goals.</p>
                  <img src="media/images/dittoLogo.png " style={{width:"50%" , marginLeft:"2rem"}} />
                  <p className='text-sm test-gray-600 mb-15 mt-8 '>Systematic trading platform
                   that allows you to create and backtest
                   strategies without coding.</p>
                </div>

            </div>
            <button className=' border-2 border-blue-500 min-w-40 col bg-blue-500 p-1 rounded mb-10 hover:bg-black text-white'>Sign up for free</button>
        </div>
        

        </>
    );
}

export default Universe;