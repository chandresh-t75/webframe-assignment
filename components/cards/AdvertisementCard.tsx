import Image from 'next/image'
import React from 'react'

const AdvertisementCard = () => {
    return (
        <div className='flex flex-col xs:flex-row gap-2 w-[200px] xs:w-[380px] rounded-md shadow-2xl '>
            <div className=' w-[200px] xs:w-[150px] h-[100px] xs:h-full relative rounded-md'>
                <Image src="/slide3.jpg" alt="" fill className='rounded-t-md xs:rounded-l-md object-cover' />

            </div>

            <div className='w-full xs:w-[220px] flex flex-col gap-1  py-4 px-4'>
                <h1 className='text-semibold text-[18px]'>Build your business</h1>
                <p className='flex flex-wrap  rounded-md text-gray-400 text-[12px] '>Shopify has all the tools you need to start,sell,market and manage</p>
                <div className='w-full flex gap-2 justify-between'>
                    <button className='w-[70%] px-4 rounded-md text-[16px] text-violet-600 bg-purple-300'>Visit</button>
                    <p className='w-[20%] flex self-center  text-bold p-2 rounded-md bg-gray-100'>...</p>
                </div>
            </div>


        </div>
    )
}

export default AdvertisementCard