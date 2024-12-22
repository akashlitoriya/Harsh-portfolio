import React from 'react'
import { RxCross2 } from "react-icons/rx";

const GalleryUploader = ({gallery, setGallery}) => {
    function handleFileAdd(e){
        if(e.target.files.length > 0){
            if(gallery.length > 0 && gallery.find((item)=>item.name === e.target.files[0].name)){
                return;
            }
            setGallery([...gallery, e.target.files[0]]);
        }
    }
  return (
    <div className='w-full flex flex-col gap-2'>
        <p>Gallery</p>
      {
        gallery && gallery.length > 0 && (
            <div className='w-full flex flex-wrap flex-row gap-3'>
                {
                    gallery.map((item)=>(
                        <div key={`${item?.name}_${item?.lastModifiedDate}`} className='flex flex-row gap-2 px-3 py-2 border-2 border-cyan_primary rounded-full'>
                            <p>{item?.name}</p>
                            <button onClick={()=>setGallery(gallery.filter((file)=>file!==item))}><RxCross2 /></button>
                        </div>
                    ))
                }
            </div>
        )
      }
      <div>
        
        <label htmlFor='gallery' className='w-full cursor-pointer'>
            <div className='w-full px-4 py-2 bg-secondary_background rounded-lg'>
                <p className='px-3 py-2 rounded-md bg-yellow-300 w-fit text-black font-semibold'>Upload File</p>
            </div>
            <input type='file' accept='image/jpg, image/jpeg, image/png' id='gallery' className='hidden' onChange={(e)=>handleFileAdd(e)}/>
        </label>
        
      </div>
    </div>
  )
}

export default GalleryUploader
