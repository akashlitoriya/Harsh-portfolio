import React, { useEffect, useRef, useState } from "react";
import { project } from "../services/apiPaths";
import ProjectModal from "./ProjectModal";

const Gallery = ({ itemList }) => {
  const container = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [openedProject, setOpenedProject] = useState({});

  function handleProjectOnClick(project){
    setOpenedProject(project);
    setOpenModal(true);
  }

  return (
    <div className="">
      {itemList?.length > 0 && (
        <div
          ref={container}
          className="w-full h-full columns-1 md:columns-2 lg:columns-3 gap-8"
        >
          {itemList?.length > 0 &&
            itemList.map((item, index) => {
              return (
                <div key={item.projectId} className={"group h-fit mb-8 relative cursor-pointer"} onClick={()=>handleProjectOnClick(item)}>
                  {item.fileType.match("image") && (
                    <img
                      src={item.file_url}
                      alt={item.title}
                      className={
                        "object-cover w-full rounded-xl grayscale-0 transition-all duration-300 hover:scale-105 hover:grayscale-0 group-hover:opacity-80" +
                        ` ${index % 2 == 0 ? "h-80" : "h-80"}`
                      }
                    />
                  )}
                  {item.fileType.match("video") && (
                    <video
                      src={item.file_url}
                      className={
                        "object-cover w-full rounded-xl grayscale-0 transition-all duration-300 hover:scale-105 group-hover:opacity-80" +
                        ` ${index % 2 == 0 ? "h-80" : "h-80"}`
                      }
                      poster={item.gallery[0]}
                    />
                  )}

                  <p className="text-white font-Montserrat opacity-0 font-semibold absolute bottom-4 left-4 line-clamp-1 transition-all duration-300 group-hover:scale-105 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:opacity-100">{item.title}</p>
                </div>
              );
            })}
        </div>
      )}

      {openModal && (<ProjectModal project={openedProject} closeModalHandler={()=>setOpenModal(false)}/>)}
    </div>
  );
};

export default Gallery;
