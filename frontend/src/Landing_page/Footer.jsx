import React from 'react'

function Footer() {
    return (  
        <>
        <div className=' border-t border-gray-200 bg-gray-50'>
        <div className='flex w-6xl mx-auto space-x-4 px-4 mt-12'>
          
            <div className='flex-1'>
                <img src="media/images/logo.svg" style={{width:"70%"}} />
                <p className='mt-4 text-xs'>&copy;2010 - 2026, Zerodha Broking Ltd. &nbsp;
                All rights reserved.</p>
            </div>

            <div className='flex-1'>
                <p className='mb-4'>Account</p>
                <div className='flex flex-col gap-4'>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Open demat account</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Minor demat account</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>NRI demat account</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>HUF demat account</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Commodity</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Dematerialisation</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Fund transfer</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>MTF</a>
                </div>
            </div>

            <div className='flex-1'>
                <p className='mb-4'>Support</p>
                <div className='flex flex-col gap-4'>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Contact us</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Support portal</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>How to file a complaint?</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Status of your complaints</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Bulletin</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Circular</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Z-Connect blog</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Downloads</a>
                </div>
            </div>

            <div className='flex-1'>
                <p className='mb-4'>Company</p>
                <div className='flex flex-col gap-4'>
                    <a href="" className='text-gray-600 hover:text-blue-500'>About</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Philosophy</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Press & media</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Careers</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Zerodha Cares (CSR)</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Zerodha.tech</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Open source</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Referral program</a>
                </div>
            </div>

            <div className='flex-1'>
                <p className='mb-4'>Quick links</p>
                <div className='flex flex-col gap-4'>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Upcoming IPOs</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Brokerage charges</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Market holidays</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Economic calendar</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Calculators</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Markets</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Sectors</a>
                    <a href="" className='text-gray-600 hover:text-blue-500'>Gift Nifty</a>
                </div>
            </div>
           
        </div>
        <div className='w-6xl mx-auto px-4 my-4'>
         <p className='mt-15 text-xs text-gray-400'>
                Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>
            <br />
            <p className="text-xs text-gray-400">
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>
            <br />
            <p  className="text-xs text-gray-400">
                Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            <br />
            <p  className="text-xs text-gray-400">
                Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <br />
            <p  className="text-xs text-gray-400">
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
            </p>
            <br />
            <p  className="text-xs text-gray-400">
                *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
            </p>
            <br />
            <p  className="text-xs text-gray-400">
                Fixed deposit  className="text-xs text-gray-400" products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
            </p>

           </div>
        </div>  

        </>
    );
}

export default Footer;