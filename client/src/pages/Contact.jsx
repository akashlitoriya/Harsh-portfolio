import React, {useState} from 'react'
import CTAButton from '../components/CTAButton';
import { IoLogoInstagram,IoLogoLinkedin } from "react-icons/io5";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className='h-screen flex justify-center items-center snap-start'>
      {/* Container  */}
      <div className='w-4/5 flex flex-col justify-center items-center'>
        {/* Input Boxes  */}
        <div className='flex flex-col gap-10 items-center'>
          <div className='flex flex-row gap-10'>
            <input onChange={(e)=> setName(e.target.value)} placeholder='NAME' className='py-3 pl-0 pr-5 bg-backdrop text-text_secondary font-semibold text-2xl border-b-4 border-text_secondary focus:outline-none focus:border-blue_primary'/>
            <input onChange={(e)=> setEmail(e.target.value)} placeholder='EMAIL' className='py-3 pl-0 pr-5 bg-backdrop text-text_secondary font-semibold text-2xl border-b-4 border-text_secondary focus:outline-none focus:border-blue_primary'/>
          </div>

          <input onChange={(e)=> setMessage(e.target.value)} placeholder='WRITE YOU MESSAGE HERE...' className='w-full py-3 pl-0 pr-5 bg-backdrop text-text_secondary font-semibold text-2xl border-b-4 border-text_secondary focus:outline-none focus:border-blue_primary'/>

          {/* Button  */}
          <div className='w-3/5 flex justify-center items-center'>
            <CTAButton text={"Connect"} primaryColor={"blue_primary"} textColor={"white"}/>
          </div>
          {/* Socials  */}
          <div className='flex flex-row gap-3 text-3xl'>
            <a href='' ><IoLogoInstagram/></a>
            <a href='' ><IoLogoLinkedin/></a>
            <a href='' ></a>
            <a href='' ></a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
