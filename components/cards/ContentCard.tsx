import Image from 'next/image'
import React from 'react'

const ContentCard = () => {
  return (
    <div>
        <div className='flex  gap-2 items-center justify-center '>
            <div className='w-[30px] h-[30px] relative p-5 rounded-full bg-indigo-200'>
            <Image src="/profile.svg" alt="" fill className='object-contain p-2'/>
            </div>
           
            <div className='flex flex-col '>
                <h1 className='text-[18px]  font-semibold'>Articles</h1>
                <p className='text-[12px]'><span>4950</span> New Updates</p>
            </div>
        </div>
    </div>
  )
}

export default ContentCard