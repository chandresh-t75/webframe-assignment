"use client"

import Link from 'next/link'
import Image from 'next/image'

import { useRouter,usePathname } from "next/navigation"
import { sidebarLinks } from '../../constants'



const LeftSidebar = () => {
   const router=useRouter();
   const pathname=usePathname()
  
  return (
    <section className='custom-scrollbar bg-slate-200 sticky left-0 top-0 z-40  h-screen w-fit flex-col justify-between overflow-auto pb-5 pt-28 hidden md:flex'>
      
      <div className='flex w-full flex-1 flex-col gap-2 px-6 '>
         {
          sidebarLinks.map((link)=>{
        const isActive=(pathname.includes(link.route) && link.route.length>1)|| pathname===link.route

        if(link.route==='/profile')link.route= `${link.route}/`

            return (
            <Link href={link.route} key={link.label} className={`relative flex justify-start gap-4 rounded-lg p-4 pr-14 ${isActive && 'bg-primary-500 transition-all duration-200'}`}>
              <Image src={link.imgURL} alt="" width={20} height={20} className='text-black'/>
              <p className='text-black text-[14px] max-lg:hidden'>{link.label}</p>
            </Link>
           )})
         }
         <div className="mt-20 px-6">
                 
                 <Link href="/contact" className='flex cursor-pointer gap-4 p-4 bg-indigo-200 rounded-xl'>
                  <Image src="/logout.svg" width={24} height={24} alt=""/>
                  <p className="text-gray-800 max-lg:hidden">Contact Support</p>
                 </Link>
              
     </div>
      </div>
      
      </section>
  )
}

export default LeftSidebar