import React from 'react'
import { Link } from 'react-router-dom'
import { GiFilmProjector } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { authCheck } from '../services/auth';
import { RiLandscapeLine } from "react-icons/ri";
import { MdHomeWork } from "react-icons/md";

const Home = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.user.token);
  useEffect(()=> {
    dispatch(authCheck(token, navigate))
  },[])
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
          <Link to={`/bg`} className='cursor-pointer border-2 border-red-600 py-6 px-12 hover:bg-red-500 w-fit text-cream_primary flex flex-col justify-center items-center gap-3'>
            <RiLandscapeLine className='text-3xl'/>
            <div >
              Change Background
            </div>
          </Link>
          <Link to={`/worksection`} className='cursor-pointer border-2 border-red-600 py-6 px-12 hover:bg-red-500 w-fit text-cream_primary flex flex-col justify-center items-center gap-3'>
            <MdHomeWork className='text-3xl'/>
            <div >
              Work Section Image
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
