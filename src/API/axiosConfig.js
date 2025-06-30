import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://evangadi-q-a-backend.onrender.com/api",
});
export default axiosBase;
