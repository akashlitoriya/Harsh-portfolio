import React, { useRef } from 'react'
import hero_section_image from '../assets/hero_section_image.png'
import CTAButton from '../components/CTAButton'
const Home = () => {
  return (
    <div className=' w-full h-screen text-white text-5xl font-bold flex justify-center items-center snap-start'>
      {/* Container  */}
      <div className='flex flex-row items-center border-b-4 border-text_secondary'>
        <div className='flex flex-col gap-6'>
          <h1 className='font-extrabold font-Montserrat text-5xl uppercase tracking-wider'>Harsh Mandloi</h1>
          <div className='flex flex-row items-center gap-5 font-Montserrat text-text_secondary text-2xl font-semibold mb-8'>
            <span>3D Artist</span>
            <span>Graphic Designer</span>
          </div>
          <div className='w-max'>
            <CTAButton text={"Hire Me"} primaryColor={'blue_primary'} textColor={'white'}/>
          </div>
          

        </div>
        <div className=''>
          <img src={hero_section_image}/>
        </div>
      </div>
    </div>
  )
}

export default Home
