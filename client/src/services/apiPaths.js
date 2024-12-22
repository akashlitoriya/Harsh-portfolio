const backend = import.meta.env.VITE_BACKEND_BASEURL;

export const project = {
    productMockup : `${backend}/api/v1/project/getProductMockups`,
    productAnimation : `${backend}/api/v1/project/getProductAnimations`,
    personalProject : `${backend}/api/v1/project/getPersonalProjects`,
    brandVisual: `${backend}/api/v1/project/getBrandVisuals`
}

export const review = {
    addReview: `${backend}/api/v1/review/addReview`
}
export const contact = {
    contactUs: `${backend}/api/v1/contact/contact`
}