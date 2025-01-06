import React, { useEffect, useState } from 'react'
import { getPersonalProjects } from '../services/productService'
import Gallery from '../components/Gallery';
import { useSelector } from 'react-redux';
import { addLoader, removeLoader } from '../store/loaderSlice';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';

const PersonalProject = () => {
    const {loading} = useSelector((store)=>store.loader)
    const dispatch = useDispatch();
    const [projectList, setProjectList] = useState([]);
    useEffect(()=>{
      fetchPersonalProject();
    },[])

    async function fetchPersonalProject(){
        dispatch(addLoader());
        const data = await getPersonalProjects();
        setProjectList(data);
        dispatch(removeLoader())
    }

    if(loading){
      return (<Loader />)
    }
    
    //console.log("PROJECT LIST : ", projectList);
  return (
    <div className='min-h-screen w-screen overflow-x-hidden flex flex-col justify-center items-center bg-backdrop'>
      <div className='w-max mt-6 md:mt-10'>
          <h1 className='text-white text-3xl lg:text-4xl w-fit tracking-wider font-Montserrat font-semibold uppercase'>Personal Project</h1>
          <p className='h-[2px] md:h-1 bg-blue_primary'></p>
        </div>
      <div className='w-full md:w-[1200px] p-8 rounded-xl'>
        {
          projectList && projectList.length === 0 ? (
            <div className='text-gray-300 text-xl text-center font-semibold'>No Project Found</div>
          ):(
            <Gallery itemList={projectList}/>
          )
        }
        
      </div>
    </div>
  )
}

export default PersonalProject
