import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../services/project'
import ProjectCard from '../components/core/listProjects/ProjectCard';
import { deleteProject } from '../services/project';
import { setLoading } from '../store/slices/loaderSlice';
import Loader from '../components/core/Loader'

const ListProjects = () => {
    const dispatch = useDispatch();
    const [projects, setProjects] = useState([]);
    const {token} = useSelector((state) => state.user)
    const {loading} = useSelector((state)=> state.loader)

    useEffect(()=>{
        fetchProjects();
    },[]);

    const fetchProjects = async() => {
        const data = await dispatch(getProjects(localStorage.getItem('token')));
        setProjects(data);
    }

    const handleDeleteProject = async(projectId) =>{
        try{
            const updateProjects = projects.filter((project) => project.projectId !== projectId);
            dispatch(setLoading(true));
            await dispatch(deleteProject(projectId, token))
            setProjects(updateProjects);
            dispatch(setLoading(false));
        }catch(err){
            console.log("ERROR DELETING PROJECT : ", err)
        }
    }

    if(loading){
        return <Loader />
    }

  return (
    <div className='min-h-screen w-screen bg-backdrop flex justify-center items-center'>
        <div className='max-w-[1200px] max-h-[80vh] overflow-y-scroll scrollbar-hide w-full bg-cream_primary rounded-xl divide-y-2 divide-gray-600'>
            <h1 className='text-center px-7 py-5 text-4xl text-text_secondary tracking-wider font-semibold'>List of Projects</h1>
            <div className='h-full px-7 py-5 grid grid-cols-12 text-center gap-3 '>
                <div className='col-span-2 font-medium text-backdrop'>Title</div>
                <div className='col-span-4 font-medium text-backdrop'>Description</div>
                <div className='col-span-2 font-medium text-backdrop'>Category</div>
                <div className='col-span-2 font-medium text-backdrop'>createdAt</div>
                <div className='col-span-2 font-medium text-backdrop'>Options</div>

                {
                    projects?.length > 0 && projects.map((project)=>{
                        return (
                            <ProjectCard project={project} key={project.projectId} fetchProjects={fetchProjects} onDelete={handleDeleteProject}/>
                        )
                    })
                }

            </div>

        </div>
      
    </div>
  )
}

export default ListProjects
