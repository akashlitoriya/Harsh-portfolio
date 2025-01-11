import React from 'react'

const ReviewCardSkeleton = () => {
  return (
    <div className='px-8 py-5 rounded-lg w-60 sm:w-80 md:min-w-[500px] bg-black bg-opacity-60 backdrop-blur-3xl shadow-xl'>
          <div className='space-y-2 flex flex-col justify-between h-full animate-pulse'>
            <div className='space-y-2'>
                <div className='h-5 w-12 bg-gray-300 bg-opacity-25 rounded-md'></div>
                <div className='h-20 w-full bg-gray-300 bg-opacity-25 rounded-md'></div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-gray-400 space-y-2'>
                    <div className='h-4 w-36 bg-gray-300 bg-opacity-25 rounded-md'></div>
                    <div className='h-4 w-40 bg-gray-300 bg-opacity-25 rounded-md'></div>
                </div>
                <div>
                    <div className='w-4 h-4  bg-gray-300 bg-opacity-25 rounded-md'></div>
                </div>
            </div>
          </div>
        </div>
  )
}

export default ReviewCardSkeleton
