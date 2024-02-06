import Image from 'next/image'
import React from 'react'

const ArticleCard = () => {
  return (
    <div className='flex flex-col gap-2 w-max-content'>
        <div className='w-full h-[150px] relative rounded-md'>
            <Image src="/slide3.jpg" alt="" fill className='object-cover rounded-md'/>

        </div>
        <div className='flex justify-between'>
            <div className='flex gap-1'>
                <h1 className='text-semibold text-violet-600'>BUSINESS</h1>
                <h1>.</h1>
                <p className=''>20 Sep 2022</p>
            </div>
            <div className='flex flex-row gap-1'>
            <Image src="" alt="" width={16} height={16} className='object-cover'/>
            <p>Maria Doe</p>
            </div>
        </div>
        <div className='flex gap-1 items-center justify-between'>
            <h1 className='text-bold text-[18px]'>7 Rules of Effective Branding</h1>
             <p className='px-4 py-2 rounded-md text-violet-600 bg-purple-100'>Created</p>
        </div>
        <p>Why branding for your Business</p>
        <div className='flex gap-1 justify-between'>
            <p className='px-4 py-2 rounded-md  bg-gray-100'>Branding</p>
            <p className='px-4 py-2 rounded-md  bg-gray-100'>Communication</p>
            <p className='px-4 py-2 rounded-md bg-gray-100'>Branding</p>
        </div>
         <div className='flex gap-2 justify-between'>
            <button className='flex-[80%] px-10 py-1 rounded-xl text-violet-600 bg-purple-300'>View</button>
            <p className=' flex-[16%] flex self-center align-middle text-bold px-4 py-2 rounded-md bg-gray-100'>...</p>
         </div>
    </div>
  )
}

export default ArticleCard