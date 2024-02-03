import React, { useRef } from 'react'
import HeroSection from '../components/HeroSection'
import Contact from '../components/Contact'
import WorkExperience from "../components/WorkExperience"
const Home = () => {

  const container = useRef();
  
  const handleHorizontalScroll = (e) =>{
    if(e.deltaY > 0){
      container.current.scrollBy({left: container.current.clientWidth, behavior: 'smooth'});
    }else{
      container.current.scrollBy({left: -container.current.clientWidth, behavior:'smooth'})
    }
    
  }

  return (
    <div ref={container}
      onWheel={handleHorizontalScroll}
      className='box h-screen overflow-y-hidden overflow-x-scroll scroll-smooth grid grid-flow-col auto-cols-auto snap-x snap-mandatory'>
        <HeroSection />
        <WorkExperience />
        <Contact />
    </div>
  )
}

export default Home
