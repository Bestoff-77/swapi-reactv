import axios from "axios";

const URL = "https://swapi.dev/api/";

const axiosInstance = axios.create({
  baseURL: URL
});

export default axiosInstance;