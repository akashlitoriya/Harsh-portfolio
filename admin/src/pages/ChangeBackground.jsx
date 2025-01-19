import React, { useState } from 'react'
import FileUploadBox from '../components/common/FileUploadBox'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/core/Loader';
import { changeBackground } from '../services/background';

const ChangeBackground = () => {
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user);
    const {isLoading} = useSelector(state => state.loader)
    const[bg, setBg] = useState(null);
    const[isMobile, setIsMobile] = useState(false);
    function handleBgChange(){
        console.log("CHANGE BACKGROUND CALLED")
        const formdata = new FormData();
        formdata.append('file', bg);
        formdata.append('isMobile', isMobile)
        dispatch(changeBackground(token, formdata));
    }

  return (
    <div className='w-screen h-screen bg-backdrop flex items-center justify-center'>
      <div className='space-y-6 w-2/6'>
        <h1 className='text-white text-3xl font-semibold text-center'>Change Background</h1>
        <div className='space-y-3'>
            <div className='relative'>
                <div className='grid grid-cols-2 border border-yellow-600 rounded-full py-2 z-10'>
                    <h1 className={`z-10 text-center font-semibold cursor-pointer ${isMobile? 'text-white': 'text-black'}`} onClick={()=> setIsMobile(false)}>Desktop</h1>
                    <h1 className={`z-10 text-center font-semibold cursor-pointer ${isMobile? 'text-black': 'text-white'}`} onClick={()=>setIsMobile(true)}>Mobile</h1>
                </div>
                <div className={`bg-yellow-600 w-1/2 h-10 absolute top-0 left-0 rounded-full transition-all duration-300 ${!isMobile? 'translate-x-0': 'translate-x-full'}`}/>

                
            </div>
            <FileUploadBox file={bg} setFile={setBg} />
            <button className='px-5 py-3 rounded-md bg-yellow-500 text-black hover:font-semibold transition-all duration-300 hover:scale-105 mx-auto' onClick={()=>handleBgChange()}>Change Background</button>
        </div>
      </div>
      {
        isLoading && <Loader />
      }
    </div>
  )
}

export default ChangeBackground
