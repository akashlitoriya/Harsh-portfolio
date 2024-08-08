import React from 'react'
import hero_section_img from '../assets/hero_section_image.png'
import AddReviewForm from '../components/AddReviewForm'

const AddReview = () => {
  return (
    <div className='w-screen min-h-screen bg-backdrop flex items-center p-6 md:p-0'>
      <div className='max-w-7xl h-full flex flex-col md:flex-row justify-between items-center mx-auto'>
        <div>
            <img src={hero_section_img} />
        </div>
        <div className='w-full md:w-1/2'>
            <AddReviewForm />
        </div>
      </div>
    </div>
  )
}

export default AddReview
