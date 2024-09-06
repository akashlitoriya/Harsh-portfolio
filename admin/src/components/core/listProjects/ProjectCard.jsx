import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "../../common/Modal";


const ProjectCard = ({ project, fetchProject, onDelete }) => {
    const [openModal, setOpenModal] = React.useState(false);
    const [listOpened, setListOpened] = React.useState(false);
    const handleDeleteProject = () =>{
        onDelete(project.projectId);
        setOpenModal(false);
    }
    return (
        <>
            <div className="col-span-2 text-left space-x-5 text-sm">
                <button
                    className={`text-lg `}
                    onClick={() => setListOpened(!listOpened)}
                >
                    {listOpened ? (
                        <IoIosArrowDown className="rotate-180" />
                    ) : (
                        <IoIosArrowDown />
                    )}
                </button>
                <span>{project.title}</span>
                {project.important && <span></span>}
            </div>
            <div className="col-span-4 text-left text-sm">{project.description}</div>
            <div className="col-span-2 text-sm">{project.category}</div>
            <div className="col-span-2 text-sm">
                {new Date(project.createdAt).toDateString()}
            </div>
            <div className="col-span-2 text-lg">
                
                <button
                    className=" text-red-600 px-3 py-1 rounded-md"
                    onClick={() => setOpenModal(true)}
                >
                    <RiDeleteBin5Line />
                </button>
            </div>
            {listOpened && (
                <div className="col-span-12">
                    <div></div>
                </div>
            )}
            {openModal && (
                <Modal
                    title={"Are you sure?"}
                    description={
                        "This action cannot be undone. All values associated with this field will be lost."
                    }
                    label1={"Cancel"}
                    label2={"Delete"}
                    childrenClass={"text-red-700"}
                    buttonClass={""}
                    onCancel={() => setOpenModal(false)}
                    onSubmit={handleDeleteProject}
                >
                    <RiDeleteBin5Line />
                </Modal>
            )}
        </>
    );
};

export default ProjectCard;
