import axios from "axios";

const devUrl = "http://localhost:5000/api";

const config = {
  // baseURL: "https://mern-habit-it-backend.vercel.app",
  baseURL: devUrl,
  // timeout: 2000,
  //   withCredentials: true,
};
const axiosClient = axios.create(config);

export default axiosClient;
