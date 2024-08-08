const backend_url = `${import.meta.env.VITE_BACKEND_BASEURL}/api/v1`;


export const products = {
    addProject: `${backend_url}/project/createProject`,
    getPersonalProject: `${backend_url}/project/getPersonalProjectsAll`,
    getProductAnimation: `${backend_url}/project/getProductAnimationsAll`,
    getProductVisualization: `${backend_url}/project/getProductVisualizationsAll`,
}

export const auth = {
    login: `${backend_url}/user/login`
}

export const reviews ={
    writeReview: `${backend_url}/review/writeReview`,
    getReviews: `${backend_url}/review/getReviews`,
    getPendingReviews: `${backend_url}/review/getPendingReviews`
}