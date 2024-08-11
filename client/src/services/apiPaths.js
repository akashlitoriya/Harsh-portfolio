const backend = import.meta.env.VITE_BACKEND_BASEURL;

export const project = {
    productVisualization : `${backend}/api/v1/project/getProductVisualizations`,
    productAnimation : `${backend}/api/v1/project/getProductAnimations`,
    personalProject : `${backend}/api/v1/project/getPersonalProjects`
}

export const review = {
    addReview: `${backend}/api/v1/review/addReview`
}
export const contact = {
    contactUs: `${backend}/api/v1/contact/contact`
}