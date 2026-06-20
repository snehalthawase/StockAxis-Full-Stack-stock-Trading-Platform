import React from 'react'

function Brokerage() {
    return (  
        <>
       <div className='grid grid-cols-10 w-6xl mx-auto px-4 my-10 border-t border-gray-200'>
                <div className='col-span-8 mt-15'>
                    <h3 className='ml-50 text-lg text-blue-400 mb-5'>Brokerage calculator</h3>
                    <ul className='list-disc list-inside' style={{listStylePosition:"left", lineHeight:"2rem"}}>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul> 
                </div>
                <div className='col-span-2 mt-15'>
                    <h3 className='text-lg text-blue-400 '>List of charges</h3>

                </div>
            </div>

        </>
    );
}

export default Brokerage;