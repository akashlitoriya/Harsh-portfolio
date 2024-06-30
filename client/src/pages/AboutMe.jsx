import React from 'react'
import CTAButton from '../components/CTAButton'

const AboutMe = () => {
  return (
    <div className='h-screen w-full font-bold font-Montserrat flex flex-col justify-center items-center snap-start'>
      <div className='w-4/5 flex flex-col items-center gap-12'>
        {/* Heading  */}
        <div className='w-max'>
          <h1 className='text-white text-4xl w-fit'>What do i do</h1>
          <p className='h-1 bg-blue_primary'></p>
        </div>
        {/* Container  */}
        <div className='flex flex-col text-2xl w-full gap-5 text-white'>
          <div className='w-full flex flex-row gap-5'>
            <p className='text-center border-2 border-white p-4 w-1/3'>3D Renders</p>
            <p className='text-center border-2 border-white p-4 w-1/3'>3D Animation</p>
            <p className='text-center border-2 border-white p-4 w-1/3'>Product Visualization</p>
          </div>
          
          <div className='w-full flex flex-row gap-5 justify-center'>
            <p className='col-span-6 text-center border-2 border-white p-4 w-1/4'>Logo Design</p>
            <p className='col-span-6 text-center border-2 border-white p-4 w-1/4'>Visual Design</p>
          </div>
          <div className='w-full flex flex-row justify-center'>
            <p className='col-span-12 text-center border-2 border-white p-4 w-1/4'>Branding</p>
          </div>

        </div>
        {/* Button  */}
        <div className='w-max'>
          <CTAButton text={"AboutMe"} textColor={"white"} primaryColor={"blue_primary"} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
