import React from 'react'

const Loader = () => {
  return (
    <div className='absolute w-screen h-screen top-0 left-0 z-50 bg-transparent backdrop-brightness-75 backdrop-blur-md flex justify-center items-center'>
        <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />
      
    </div>
  )
}

export default Loader
