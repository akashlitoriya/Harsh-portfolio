import React from 'react'
import AddProjectForm from '../components/core/AddProjectForm'
import hero_section_image from '../assets/hero_section_image.png'
import Loader from '../components/core/Loader'
import {useSelector} from 'react-redux'
const AddProject = () => {
  const {isLoading} = useSelector(state => state.loader)
  return (
    <div className='max-w-screen min-h-screen bg-backdrop flex justify-center items-center relative'>
      <div className='w-4/5 flex flex-row items-center gap-9'>
        <div className='animate-pulse'>
          <img src={hero_section_image}/>
        </div>
        <div className='w-1/2'>
          <AddProjectForm />
        </div>

      </div>
      {
        isLoading && <Loader />
      }
    </div>
  )
}

export default AddProject
