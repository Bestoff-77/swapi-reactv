import axiosInstance from "./config";

export const allApi = (endpoint) => 
  axiosInstance.get(`${endpoint}`)
    .then((response) => response.data)
    .catch((error) => console.error("all-error: ", error));

export const getApi = (endpoint, id) => 
  axiosInstance.get(`${endpoint}/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error("get-error: ", error));