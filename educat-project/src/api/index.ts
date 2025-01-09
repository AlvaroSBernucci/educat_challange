import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
});

export default api;
