import React from 'react'

function Awards() {
    return (  
        <>
        <div className='flex w-6xl  mx-auto px-4 mt-17 '>
            <div className='flex gap-2'>
                <div className='flex-1'>
                    <img src="media/images/largestBroker.svg"/>
                </div>
                <div className='flex-1 mt-12'>
                    <h1 className='text-3xl font-medium'>
                        Largest stock broker in India
                    </h1>
                    <p className='mt-1'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='flex gap-2 mt-8'>
                        <div className='flex-1'>
                            <ul className='list-disc list-inside'>
                                <li>Futures and Options</li>
                                 <li>Commodity derivatives</li> 
                                 <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='flex-1'>
                             <ul className='list-disc list-inside'>
                                <li>Stocks & IPOs</li>
                                 <li>Direct mutual funds</li> 
                                 <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%" , marginTop:"1rem"}}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Awards;