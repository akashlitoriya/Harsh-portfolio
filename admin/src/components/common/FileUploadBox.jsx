import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";

const FileUploadBox = ({file, setFile}) => {
    const[selectedFile, setSelectedFile] = useState(null);
  return (
    <div className='bg-secondary_background rounded-lg p-6'>
      <div className='flex justify-center items-center w-full h-40'>
        {
            file? (
                <div className='w-full rounded-lg'>
                    {
                        selectedFile.type.includes('image')?(
                            <img src={URL.createObjectURL(selectedFile)} alt="file" className='w-full max-h-32 object-cover object-center rounded-lg'/>
                        ) : (
                            <video src={URL.createObjectURL(selectedFile)} autoPlay loop className='w-full max-h-32 object-cover object-center rounded-lg'/>
                        )
                    }
                    <div className='w-full flex justify-between items-center text-base mt-2'>
                        <p className='text-xs font-semibold'>{selectedFile.name}</p>
                        <button className='font-semibold text-glowing_pink' onClick={()=>{setSelectedFile(null) ; setFile(null)}}>Remove</button>
                    </div>
                </div>
            ):(
                <label className='cursor-pointer'>
                    <div className='flex flex-col justify-center items-center text-base gap-2'>
                        <IoCloudUploadOutline className='text-4xl text-cyan_primary'/>
                        <p>Click to upload or drag and drop</p>
                        <p className='text-xs'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input type="file" className='hidden' onChange={(e) =>{setSelectedFile(e.target.files[0]); setFile(e.target.files[0])}} accept='image/png, image/jpg, image/jpeg, video/mkv, video/mp4, video/webm'/>
                </label>
            )
        }

      </div>
    </div>
  )
}

export default FileUploadBox
