import React from 'react'
import Layout from '../../components/layout_components/Layout'
import { PiCloverFill } from 'react-icons/pi'

const UserRegistrationPage= () => {
  return (
    <>
      
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
            <div className='space-y-4 md:w-[20%] w-[90%] '>
                <PiCloverFill color='gray' size={30} className='mb-10'/>
                <h4 className='text-3xl'>Letc Connect</h4>
                <hr className='border-1 border-gray-100 '/>
                <div className='flex flex-col gap-2 text-sm '>
                    <label className='text-xl font-semibold'>Name</label>
                    <input className='w-[100%] py-2 px-1 rounded-md shadow border border-gray-300' placeholder='Enter your Full Name'/>
                </div>
                <div className='flex flex-col gap-2 text-sm '>
                    <label className='text-xl font-semibold'>Email</label>
                    <input className='w-[100%] py-2 px-1 rounded-md shadow border border-gray-300' placeholder='Enter your Email Address'/>
                </div>
                <div className='flex flex-col gap-2 text-sm '>
                    <label className='text-xl font-semibold'>Password</label>
                    <input className='w-[100%] py-2 px-1 rounded-md shadow border border-gray-300' placeholder='Enter your Password'/>
                </div>
                <div className='flex flex-col gap-2 text-sm '>
                    <label className='text-xl font-semibold'>Confirm Password</label>
                    <input className='w-[100%] py-2 px-1 rounded-md shadow border border-gray-300' placeholder='Enter your Password'/>
                </div>
                <button className='w-full bg-gray-800 text-white'>
                    Register
                </button>
                <div className='text-[12px] text-gray-700'>
                    <h6>Dont have a Account yet! <span className='underline font-semibold'>Sign up</span></h6>
                    <h6>Forget Password <span className='underline font-semibold'>Reset</span></h6>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserRegistrationPage
