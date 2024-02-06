import React from 'react'
import ContentCard from '../../../../components/cards/ContentCard'
import ArticleCard from '../../../../components/cards/ArticleCard'
import Link from 'next/link'
import StoriesCard from '../../../../components/cards/StoriesCard'
import AdvertisementCard from '../../../../components/cards/AdvertisementCard'

const page = () => {
  return (

    <div className='w-[100%] md:w-[75%] flex flex-col mt-[100px] py-4 max-md:px-6  gap-8'>
    <section>
        <h1 className='font-bold text-[30px] leading-[48px] font-600'>Hello Admin,</h1>
        <p className='text-gray-700 '>This is what we got for today</p>
    </section>
    <section className='w-full flex flex-row gap-y-4 gap-4 pr-4 flex-wrap lg:flex-nowrap justify-center xs:justify-between'>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
    </section>
      <section className='flex flex-col'>
         <div className='flex justify-between items-center'>
             <h1 className='font-semibold text-[18px]'>Top Articles</h1>
             <Link href="#" className='font-semibold text-violet-600 px-4'>See all</Link>
             </div>
        
         <div className='flex mt-8 gap-6 overflow-y-scroll mb-10'>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
         </div>

      </section>

      <section className='flex flex-col'>
         <div className='flex justify-between items-center'>
             <h1 className='font-semibold text-[18px]'>Top Stories</h1>
             <Link href="#" className='font-semibold text-violet-600 px-4'>See all</Link>
             </div>
        
         <div className='flex mt-8 gap-6 overflow-y-scroll mb-10'>
            <StoriesCard/>
            <StoriesCard/>
            <StoriesCard/>
            <StoriesCard/>
            <StoriesCard/>
         </div>

      </section>

      <section className='flex flex-col'>
         <div className='flex justify-between items-center'>
             <h1 className='font-semibold text-[18px]'>Advertisement</h1>
             <Link href="#" className='font-semibold text-violet-600 px-4'>See all</Link>
             </div>
        
         <div className='flex mt-8 gap-6 overflow-y-scroll mb-20'>
            <AdvertisementCard/>
            <AdvertisementCard/>
            <AdvertisementCard/>
            <AdvertisementCard/>
         </div>

      </section>
    </div>
  )
}

export default page