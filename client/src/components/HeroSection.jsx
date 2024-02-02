import React from 'react'
import hero_section_desk from '../assets/hero-section-desktop.mp4';
import hero_section_mob from '../assets/hero-section-mobile.mp4';
import { isMobile } from '../utils/UtilityFunction';
import { LuMouse } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className='w-full h-full relative'>
        <video 
            src={isMobile() ? hero_section_mob : hero_section_desk} 
            autoPlay 
            loop 
            muted 
            className='w-full h-full object-cover'
        />
    
        <div className='absolute bottom-10 left-1/2 text-gray-50 opacity-75 text-3xl animate-bounce'>
            <LuMouse />
        </div>
    </div>
  )
}

export default HeroSection
