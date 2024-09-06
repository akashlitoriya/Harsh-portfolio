import React from 'react'

const CTAButton = ({label, onClickHandler, isPrimary, className}) => {
  return (
    <button onClick={onClickHandler} className={`w-full px-5 py-3 rounded-md font-medium text-sm tracking-wide text-white ${isPrimary? ' bg-red-600':' bg-backdrop'} ` + className}>{label}</button>
  )
}

export default CTAButton
