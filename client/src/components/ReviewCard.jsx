import React from 'react'
import { FaInstagram } from "react-icons/fa6";

const ReviewCard = ({data}) => {
  return (
    <div className='px-8 py-5 rounded-lg w-80 md:min-w-[500px] text-lg text-white font-normal bg-black bg-opacity-60 backdrop-blur-3xl shadow-xl'>
      <div className='space-y-2 flex flex-col justify-between h-full'>
        <div className='space-y-2'>
            <h1 className='text-sm text-gray-400 font-semibold line-clamp-1'>{data.brandName}</h1>
            <p className='text-base text-white line-clamp-4'>{data.review}</p>
        </div>
        <div className='flex justify-between items-center'>
            <div className='text-gray-400'>
                <h3 className='text-xs'>{data.name}</h3>
                <h3 className='text-xs'>{data.email}</h3>
            </div>
            <div>
                <a href={data.social} target='_blank' className='hover:text-pink-700'><FaInstagram /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
