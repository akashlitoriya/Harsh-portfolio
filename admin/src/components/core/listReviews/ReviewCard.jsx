import React, { useState } from 'react'
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const ReviewCard = ({review, openDeleteModal}) => {
  const[showTooltip, setShowTooltip] = useState(false);
  return (
    <tr className='text-xs text-gray-700 border-b border-gray-300'>
        <td className='px-2 py-3 overflow-hidden whitespace-nowrap text-center flex'>
          <span className='line-clamp-1'>{review.name}</span>
          <span className={`ml-2 w-2 h-2 rounded-full ${review.approved? ' bg-green-500' : ' bg-red-500'}`}></span>
        </td>
        <td className='px-2 py-3 overflow-hidden whitespace-nowrap text-center'>{review.email}</td>
        <td className='px-2 py-3 overflow-hidden whitespace-nowrap text-center'>{review.brandName}</td>
        <td className='px-2 py-3 overflow-hidden whitespace-nowrap text-center'>{review.social}</td>
        <td className='px-4 py-3 whitespace-nowrap overflow-x-clip text-clip text-left relative' onMouseEnter={()=>setShowTooltip(true)} onMouseOut={()=>setShowTooltip(false)}>
          {review.review}
          {
            showTooltip && (
              <div className='absolute w-[300px] h-fit text-wrap top-8 left-0 bg-white p-2 rounded-lg shadow-md z-50'>
                <p className='text-sm text-gray-800'>{review.review}</p>
              </div>
            )
          }
        </td>
        <td className='py-3 flex gap-3 justify-center items-center text-lg'>
          <button className=''>
            <MdOutlineModeEdit/>
          </button>
          <button className='text-red-600' onClick={()=>openDeleteModal(review.reviewId)}>
            <RiDeleteBin5Line/>
          </button>
        </td>
    </tr>
  )
}

export default ReviewCard
