
import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Topbar = () => {

  return (
    <nav className='fixed w-full bg-white text-black top-0 z-30 flex items-center justify-end  md:justify-between gap-10  h-[80px] px-4 sm:px-10 py-3 pt-2 mt-2 sm:mt-0 max-h-[60px] sm:max-h-[80px]'>
      <div className='hidden sm:flex sm:ml-[40px] md:ml-[280px]'>
        <div className='flex gap-2 py-2 px-4 ring-1 ring-slate-500 rounded-full bg-white'>
          <Image src="/search.svg" alt="" width={20} height={20} className='object-cover ' />
          <input type="text" placeholder="Search..." className="appearance-none outline-none" />
        </div>
      </div>

      <div className=' flex items-center gap-4 justify-between'>
        <div className='hidden xl:flex '>
          <div className='flex text-[14px] flex-row items-center gap-2 ring-1 py-2 px-4 ring-slate-500 rounded-xl'>
            <input type="date" className="outline-none p-2 appearance-none" />
            <p>OR</p>
            <input type="date" className="appearance-none outline-none p-2" />
          </div>
  
        </div>
        <div className=''>

          <div className='flex flex-row gap-4 ring-1 items-center justify-between py-1 px-8 ring-slate-500 rounded-xl'>
            <div className='relative w-[36px] h-[36px]'>
              <Image src="/profile.svg" alt="" fill className='object-cover'/>
            </div>

            <div className='flex flex-col'>
              <p className='text-[12px]'>Welcome back,</p>
              <h1 className='text-[20px]'>Chandresh</h1>
            </div>
            <FaChevronDown />
          </div>


        </div>
      </div>
    </nav>
  )
}

export default Topbar