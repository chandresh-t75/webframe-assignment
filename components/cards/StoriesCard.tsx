import Image from 'next/image'
import React from 'react'

const StoriesCard = () => {
    return (
        <div className='flex flex-col gap-2 w-[300px] relative'>
            <div className='w-[300px] h-[400px] relative rounded-md'>
                <Image src="/bgimage.jpg" alt="" fill className='object-cover rounded-md' />

            </div>
            <div className='w-full flex flex-col absolute  z-10 top-0 r-0'>
                <div className='flex flex-row w-full justify-end pt-3 gap-2 pr-3'>
                    <div className='flex px-2 py-1 rounded-md items-center gap-1 bg-slate-100'>
                        <Image src="/home.svg" alt="" width={10} height={10} />
                        <p className='text-violet-600 text-[10px] font-medium'>428</p>
                    </div>
                    <div className='flex px-2 py-1 rounded-md items-center gap-1 bg-slate-100'>
                        <Image src="/home.svg" alt="" width={10} height={10} />
                    </div>
                </div>
            </div>
            <div className='absolute flex flex-col gap-2 bottom-2 px-2'>
                <h1 className='flex flex-wrap text-white font-medium text-[20px]'>How 7 lines code turned into $36 Billion Empire</h1>
                <div className='flex gap-1 items-center'>
                    <h1 className='text-semibold text-white'>BUSINESS</h1>
                    <h1 className='text-bold text-gray-400'>.</h1>
                    <p className='text-gray-300 font-semibold text-[12px]'>20 Sep 2022</p>
                    <p className='px-4 py-2 rounded-md text-green-600 bg-green-100'>Published</p>
                </div>
                <div className='flex gap-2 justify-between'>
                    <button className='flex-[80%] px-10 py-2 rounded-xl text-violet-600 bg-purple-300'>View</button>
                    <p className=' flex-[16%] flex self-center align-middle text-bold p-4 rounded-md bg-gray-100'>...</p>
                </div>
            </div>

        </div>
        
    )
}

export default StoriesCard