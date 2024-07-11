import React, { useEffect, useState } from 'react'
import { getPersonalProjects } from '../services/productService'
const PersonalProject = () => {
    const [projectList, setProjectList] = useState([]);
    useEffect(()=>{
        fetchPersonalProject();
    },[])

    async function fetchPersonalProject(){
        const data = await getPersonalProjects();
        setProjectList(data);
    }

    console.log("PROJECT LIST : ", projectList);
  return (
    <div>
      Personal Project
    </div>
  )
}

export default PersonalProject
