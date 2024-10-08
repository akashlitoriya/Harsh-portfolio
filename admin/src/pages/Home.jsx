import React from 'react'
import { Link } from 'react-router-dom'
import { GiFilmProjector } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";


const Home = () => {
  return (
    <div className='bg-backdrop max-w-screen min-h-screen flex justify-center items-center'>
      <div className='max-w-6xl w-full border-blue-200 border-2 p-10 space-y-5'>
        <h1 className='text-center text-4xl text-cream_primary font-semibold'>Dashboard</h1>
        <div className='flex justify-between'>
          <Link to={`/addProject`} className='cursor-pointer border-2 border-red-600 py-6 px-12 hover:bg-red-500 w-fit text-cream_primary flex flex-col justify-center items-center gap-3'>
            <FaPlusCircle className='text-3xl'/>
            <div >
              Add Project 
            </div>
          </Link>
          <Link to={`/listProjects`} className='cursor-pointer border-2 border-red-600 py-6 px-12 hover:bg-red-500 w-fit text-cream_primary flex flex-col justify-center items-center gap-3'>
            <GiFilmProjector className='text-3xl'/> 
            <div>
              List Projects
            </div>
          </Link>

          <Link to={`/listReviews`} className='cursor-pointer border-2 border-red-600 py-6 px-12 hover:bg-red-500 w-fit text-cream_primary flex flex-col justify-center items-center gap-3'>
            <LiaCommentSolid className='text-3xl'/>
            <div >
              List Reviews
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
