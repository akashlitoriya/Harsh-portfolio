import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from '../../services/project'
import { FaStarOfLife } from "react-icons/fa";
import FileUploadBox from '../common/FileUploadBox';
import GalleryUploader from '../common/GalleryUploader';
import { RxCross2 } from "react-icons/rx";
import RadioButton from '../common/Radiobutton'

const AddProjectForm = () => {
    const {register, handleSubmit, formState: { errors }, reset} = useForm()
    const [file, setFile] = useState(null);
    const [gallery, setGallery] = useState([]);
    const [isImportant, setIsImportant] = useState(false);
    const {token} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleFormSubmit = (data) =>{
      data.mainFile = file;
      data.gallery = gallery;
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('mainFile', data.mainFile);
      for (let i = 0; i < data.gallery.length; i++) {
        formData.append('gallery', data.gallery[i]);
      }
      formData.append('isImportant', isImportant);

      dispatch(addProject(formData, token));

      setGallery([]);
      setFile(null);
      reset();
    }
  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-3 text-base text-cream_primary w-full relative'>
        <div className='absolute right-8 top-8'>
          <RadioButton isSelected={isImportant} setSelected={()=>setIsImportant(!isImportant)}/>
        </div>
        <p className='text-center text-2xl font-semibold'>Add Project</p>
        <div className='flex flex-row gap-6 w-full'>
          <div className='flex flex-col gap-2 w-full'>
              <label className='flex' htmlFor='title'>Title <span><FaStarOfLife className='text-glowing_pink text-xs'/></span></label>
              <input type="text" className='w-full bg-secondary_background px-4 py-2 rounded-lg focus:outline-none' placeholder='Enter title here' id="title" {...register("title", { required: "Title is required" })} />
              {
                errors.title && <p className='text-red-500 text-xs'>{'please enter title'}</p>
              }
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='category' className='flex'>Category <span><FaStarOfLife className='text-glowing_pink text-xs'/></span></label>
            <select id='select' {...register("category", { required: "Category is required" })} className='w-full bg-secondary_background px-4 py-2 rounded-lg focus:outline-none'>
                <option value="">Select category</option>
                <option value="Product Visualization">Product Visualization</option>
                <option value="Product Animation">Product Animation</option>
                <option value="Personal Project">Personal Project</option>
            </select>
            {
              errors.category && <p className='text-red-500 text-xs'>{'please select category'}</p>
            }
          </div>
        </div>
        <div className='flex flex-col gap-2'>
            <label className='flex' htmlFor='description'>Description <span><FaStarOfLife className='text-glowing_pink text-xs'/></span></label>
            <input type="text" id="description"className='bg-secondary_background px-4 py-2 rounded-lg focus:outline-none' placeholder='Enter description here' {...register("description", { required: "Description is required" })} />  
            {
              errors.description && <p className='text-red-500 text-xs'>{'please enter description'}</p>
            } 
        </div>
        
        <div className='flex flex-col gap-2'>
            <label htmlFor='file' className='flex'>File <span><FaStarOfLife className='text-glowing_pink text-xs'/></span></label>
            <FileUploadBox file={file} setFile={(file)=>setFile(file)}/>
              
        </div>
        {
          file && (
            <div>
              {
                file.type.includes('image')?(
                  <div>
                    <GalleryUploader gallery={gallery} setGallery={(item)=>setGallery(item)}/>
                  </div>
                ):(
                  <div className='flex flex-col gap-2'>
                    <p>Thumbnail</p>
                    <div className='bg-secondary_background rounded-lg  px-4 py-2 flex flex-row justify-between'>
                      <label htmlFor='thumbnail' className='flex flex-col gap-2 cursor-pointer text-base'>
                        <div className='flex flex-row gap-6 items-center'>
                          <p className='h-full bg-gray-800 p-2 rounded-lg'>Choose file</p>
                          <p>
                            {
                              gallery.length>0?(
                                gallery[0]?.name
                              ):(
                                'No file selected'
                              )
                            }
                          </p>
                          <p>

                          </p>
                        </div>
                        <input type='file' id='thumbnail' accept='image/jpg, image/jpeg, image/png' onChange={(e)=> setGallery([e.target.files[0]])} className='hidden'/>
                        
                      </label>
                      {
                          gallery.length > 0 && (
                            <button onClick={()=>setGallery([])}><RxCross2 className='font-semibold'/></button>
                          )
                        }
                    </div>
                  </div>
                )
              }
            </div>
          )
        }
        <button type="submit" className='w-full px-5 py-3 bg-cyan_primary rounded-lg transition-all duration-200 hover:scale-95'>Submit</button>

      </form>
    </div>
  )
}

export default AddProjectForm

