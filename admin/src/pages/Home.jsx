import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='bg-backdrop max-w-screen min-h-screen flex justify-center items-center'>
      <div className='max-w-6xl w-full border-blue-200 border-2 p-10'>
        <h1 className='text-center text-4xl text-cream_primary font-semibold'>Dashboard</h1>
        <div className='grid grid-flow-col'>
          <Link to={`/addProject`} >
            <div className='cursor-pointer border-2 border-red-600 py-6 px-12 hover:bg-red-500 w-fit text-cream_primary'>
              Add Project 
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
