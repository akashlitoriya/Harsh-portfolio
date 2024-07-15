import React from 'react'
import { ImCross } from "react-icons/im";
const ProjectModal = ({project, closeModalHandler}) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-full p-4 flex justify-center items-center backdrop-blur-md'>
        
      <div className='max-h-[90vh] h-fit md:h-full w-fit relative bg-backdrop p-6 md:p-10 lg:p-12 bg-opacity-60 backdrop-blur-lg rounded-xl'>
        <button className='absolute top-3 right-3 lg:top-6 lg:right-6 text-lg text-white z-50' onClick={closeModalHandler}><ImCross /></button>
        
        <div className='h-full w-full rounded-xl'>
            {project?.fileType?.match('image') && (<img src={project?.url} className='max-h-full rounded-xl'/>)}
            {project?.fileType.match('video') && <video src={project.url} className='h-full rounded-xl' autoPlay loop />}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
