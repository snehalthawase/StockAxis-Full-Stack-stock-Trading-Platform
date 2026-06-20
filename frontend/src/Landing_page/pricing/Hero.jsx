import React from 'react'


function Hero() {
    return (  
        <>
        <div className='w-6xl mx-auto px-10 text-center mt-20 mb-15'>
           
            <h1 className='text-3xl font-medium'>Charges</h1>
            <h3 className='text-xl mb-20 text-gray-600 mt-5'>List of all charges and taxes</h3>

         <div className='flex gap-3 items-center'>
                <div className='flex-1 p-2'>
                  <img src="media/images/pricing-eq.svg" style={{width:"80%",marginLeft:"2rem" }} alt="" />
                  <h1 className='text-3xl font-medium'>Free equity delivery</h1>

                  <p className='text-lg text-gray-600 mb-15 mt-8 '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
    
                 <div className='flex-1 p-2'>
                  <img src="media/images/intradayTrades.svg" style={{width:"80%", marginTop:"2.5rem" , marginLeft:"2rem"}} alt="" />
                  <h1 className='text-3xl font-medium'  style={{marginTop:"1rem"}}>Intraday and F&O trades</h1>

                  <p className='text-lg text-gray-600 mb-15 mt-8 ' >Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className='flex-1 p-2'>
                  <img src="media/images/pricing-eq.svg" style={{width:"80%" ,marginLeft:"2rem"}}  />
                  <h1 className='text-3xl font-medium '>Free direct MF</h1>

                  <p className='text-lg text-gray-600 mb-15 mt-8 '>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>  

        </div>

        </>
    );
}

export default Hero;