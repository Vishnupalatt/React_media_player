import { BASE_URL } from "./base_url";
import { commanRequest } from "./commanRequest";

// to upload videos 

export const addVideos = async (body) => {
    return await commanRequest("POST", `${BASE_URL}/videos`, body)
}


// to get all videos 

export const getVideos = async () => {
    return await commanRequest("GET", `${BASE_URL}/Videos`, '')
}

// to delete specific videos 

export const deletevideo = async (id) => {
    return await commanRequest('DELETE', `${BASE_URL}/Videos/${id}`, {})
}
// to add category 

export const addCategory = async (body) => {
    return await commanRequest("POST", `${BASE_URL}/categories`, body)
}

// to get CategoryList 

export const getCategories = async () => {
    return await commanRequest("GET", `${BASE_URL}/categories`, '')
}

// to delete specific category

export const deletecategory = async (id) => {
    return await commanRequest('DELETE', `${BASE_URL}/categories/${id}`, {})
}

// to get all history 

export const getHistory = async () => {
    return await commanRequest("GET", `${BASE_URL}/Watchhistory`, '')
}

// To add History 

export const addHistory = async (body) => {
    return await commanRequest("POST", `${BASE_URL}/Watchhistory`, body)
}

// to get specific videos 

export const getSpecificVideos = async (id) => {
    return await commanRequest('GET', `${BASE_URL}/videos/${id}`, {})

}

// to update category 

export const updatecategory = async (id,body) => {
    return await commanRequest('PUT', `${BASE_URL}/categories/${id}`,body)
}
