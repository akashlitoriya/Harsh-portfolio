import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const CTAButton = ({text, handleSubmit, primaryColor, textColor}) => {
  return (
    <div onClick={handleSubmit} className={`w-full text-${textColor} bg-${primaryColor} rounded-md px-3 md:px-5 py-2 md:py-3 uppercase text-base md:text-xl font-medium w-fit flex flex-row gap-3 justify-center items-center tracking-wide cursor-pointer transition-all duration-150 hover:scale-105`}>
        <p>{text}</p>
        <span><FaArrowRightLong /></span>
    </div>
  )
}

export default CTAButton
