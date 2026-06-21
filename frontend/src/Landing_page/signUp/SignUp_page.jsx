import React from 'react';
import { useState } from 'react';
import OpenAccount from '../OpenAccount';
import axios from 'axios';



function SignUp_page() {

    let [ newUsername , setUsername ] =  useState("");
    let [ newpassword , setPassword ] =  useState("");

    let handleOnSubmit = (e)=>{
          e.preventDefault();
        axios.post("https://stockaxis-full-stack-stock-trading.onrender.com/signUp",{
            username:newUsername,
            password: newpassword
        })
         .then((res) => {
        console.log(res.data);
        setUsername("");
        setPassword("");
         window.location.href = "https://stockaxis-dashboard.netlify.app/"; 
    })
    .catch((err) => {
        console.error(err);
    });

        setUsername("");
        setPassword("");
    }


    return (
        <>
            <div className='w-5xl mx-auto px-10 text-center my-20'>

                <h1 className='text-3xl font-semibold'>Open a free demat and trading account online</h1>
                <p className='text-xl mt-5'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                <br />

            </div>
            <div className='flex w-6xl  mx-auto px-4 mt-17 '>
                <div className='flex gap-28'>
                    <div className='flex-1'>
                        <img src="media/images/signup.png" />
                    </div>
                    <div className='flex-1 mt-8'>
                        <h1 className='text-3xl font-medium'>
                            Signup now
                        </h1>
                        <p className='mt-1'>Or track your existing application</p>
                        <div className='flex gap-2 mt-8'>
                            <form onSubmit={handleOnSubmit} className="needs-validation">
                                <div className="mb-4">
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        name="username"
                                        placeholder="username please!"
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        id="username"
                                        required

                                        onChange={(e)=>setUsername(e.target.value)}
                                        value={newUsername}
                                    />
                                    <div className="text-green-600 text-sm mt-1">
                                        good username
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        id="password"
                                        required
                                        onChange={(e)=>setPassword(e.target.value)}
                                        value={newpassword}
                                    />
                                </div>

                                <div>
                                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition">
                                        submit
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <OpenAccount />

        </>
    );
}

export default SignUp_page;