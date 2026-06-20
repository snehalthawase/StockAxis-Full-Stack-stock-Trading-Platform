import React from 'react'

function Team() {
    return (  
        <>
        <div className='w-6xl mx-auto px-4 my-20'>
            <div className='text-center '>
                <h1 className='text-3xl font-medium text-gray-700'>
                   People
                </h1>
            </div>
            <div className='flex'>
             <div className='flex-1 mt-20 text-sm text-[17px] text-gray-700 pl-25'>   
                    <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%" , width:"60%"}}  />
            <br />
            <p className='ml-23'>Nithin Kamath</p>
            <p className='ml-23'>Founder, CEO</p>
             </div>
              <div className='flex-1 mt-20 text-[17px] text-gray-700 pr-15'>
                <p>
                   Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
               <br /> <p>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <br /><p>
                   Playing basketball is his zen.
                </p>
               <br /> <p>
                Connect on <a href="" className='text-blue-500 hover:text-black'>Homepage</a> /  <a href="" className='text-blue-500 hover:text-black'>TradingQnA</a> /<a href="" className='text-blue-500 hover:text-black'>Twitter</a>  
                </p>
             </div>
            </div>
        </div>
        </>
    );
}

export default Team;