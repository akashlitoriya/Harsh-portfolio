const backend_url = `${import.meta.env.VITE_BACKEND_BASEURL}/api/v1`;


export const products = {
    addProject: `${backend_url}/project/createProject`,
    getPersonalProject: `${backend_url}/project/getPersonalProjectsAll`,
    getProductAnimation: `${backend_url}/project/getProductAnimationsAll`,
    getProductVisualization: `${backend_url}/project/getProductVisualizationsAll`,
    getProjects: `${backend_url}/project/getProjects`,
    deleteProject: `${backend_url}/project/deleteProject`
}

export const auth = {
    login: `${backend_url}/user/login`,
    authCheck: `${backend_url}/user/authCheck`
}

export const reviews ={
    writeReview: `${backend_url}/review/writeReview`,
    getReviews: `${backend_url}/review/getReviews`,
    getPendingReviews: `${backend_url}/review/getPendingReviews`,
    reviews: `${backend_url}/review/reviews`,
    deleteReview: `${backend_url}/review/deleteReview`,
    editReview: `${backend_url}/review/editReview`
}

export const background = {
    getBackground: `${backend_url}/background`,
    changeBackground: `${backend_url}/changebackground`
}