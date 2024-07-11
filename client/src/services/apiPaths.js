const backend = import.meta.env.VITE_BACKEND_BASEURL;

export const project = {
    productVisualization : `${backend}/api/v1/project/getProductVisualizations`,
    productAnimation : `${backend}/api/v1/project/getProductAnimations`,
    personalProject : `${backend}/api/v1/project/getPersonalProjects`
}