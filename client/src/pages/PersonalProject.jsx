import React, { useEffect, useState } from 'react'
import { getPersonalProjects } from '../services/productService'
import Gallery from '../components/Gallery';
const PersonalProject = () => {
    const [projectList, setProjectList] = useState([]);
    useEffect(()=>{
        fetchPersonalProject();
    },[])

    async function fetchPersonalProject(){
        const data = await getPersonalProjects();
        setProjectList(data);
    }

    //console.log("PROJECT LIST : ", projectList);
  return (
    <div className='min-h-screen w-screen overflow-x-hidden flex justify-center items-center bg-backdrop'>
      <div className='w-[1200px] p-8 rounded-xl'>
        <Gallery itemList={projectList}/>
      </div>
    </div>
  )
}

export default PersonalProject
