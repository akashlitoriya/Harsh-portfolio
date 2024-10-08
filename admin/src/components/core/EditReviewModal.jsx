import React from 'react'
import EditReviewForm from './EditReviewForm'
import { IoMdClose } from "react-icons/io";

const EditReviewModal = ({closeEditModal, review, setShowEditModal, updateReview}) => {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-transparent backdrop-blur-md'>
        <div className='bg-[#151515] p-5 rounded-lg relative'>
            <div className='absolute top-4 right-4 text-white cursor-pointer' onClick={closeEditModal}>
                <IoMdClose />
            </div>
            <EditReviewForm review={review} setShowEditModal={setShowEditModal} updateReview={updateReview}/>
        </div>
    </div>
  )
}

export default EditReviewModal
