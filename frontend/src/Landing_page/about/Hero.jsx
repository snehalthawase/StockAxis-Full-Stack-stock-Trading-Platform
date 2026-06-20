import React from 'react'

function Hero() {
    return (  
        <>
        <div className='w-6xl mx-auto px-4 my-20'>
            <div className='text-center my-20'>
                <h1 className='text-2xl font-medium text-gray-700'>
                    We pioneered the discount broking model in India.
                <br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>
            <div className='flex mt-5 border-t border-gray-100'>
             <div className='flex-1 mt-20 text-[17px] text-gray-700 pl-15 '>
                <p>
                    We kick-started operations on the 15th of August, 2010 <br /> with the goal of breaking all barriers that traders and <br /> investors face in India in terms of cost, support, and <br /> technology. We named the company Zerodha, a <br /> combination of Zero and "Rodha", the Sanskrit word for <br /> barrier.
                </p><br />
                <p>
                    Today, our disruptive pricing models and in-house <br /> technology have made us the biggest stock broker in <br /> India.
                </p><br />
                <p>
                    Over 1.6+ crore clients place billions of orders every year <br /> through our powerful ecosystem of investment <br /> platforms, contributing over 15% of all Indian retail <br /> trading volumes.
                </p><br />
             </div>
             <div className='flex-1 mt-20 text-sm text-[17px] text-gray-700  pr-15'>
            <p>
                In addition, we run a number of popular open online <br /> educational and community initiatives to empower retail <br /> traders and investors.
            </p><br />
            <p>
                <a href="" className='text-blue-500'>Rainmatter</a>, our fintech fund and incubator, has invested <br /> in several fintech startups with the <br /> goal of growing the Indian capital markets.
            </p><br />
            <p>
                And yet, we are always up to something new every day. <br /> Catch up on the latest updates on our blog or see what <br /> the media is saying about us or learn more about our <br /> business and product philosophies.
            </p><br />
             </div>
            </div>
        </div>
        </>
    );
}

export default Hero;