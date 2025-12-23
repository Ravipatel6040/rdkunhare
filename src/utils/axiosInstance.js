import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // ✅ Laravel backend
  headers: {
    Accept: "application/json",
  },
});

// Token auto attach
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
