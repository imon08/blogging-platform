import axios, { HeadersDefaults } from "axios";
import { toast } from "react-hot-toast";

const axiosClient = axios.create();

// Replace this with our own backend base URL
axiosClient.defaults.baseURL = "https://omniblog.cyclic.app/";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Adding Authorization header for all requests

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // Configure this as per your backend requirements
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/login" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axios.post("https://omniblog.cyclic.app/refresh", {
            headers: {
              RefreshAuthorization: `Bearer ${localStorage.getItem(
                "refreshToken"
              )}`,
            },
          });

          const access = rs.data.data["access-token"];
          const refresh = rs.data.data["refresh-token"];

          localStorage.setItem("accessToken", access);
          localStorage.setItem("refreshToken", refresh);

          return axiosClient(originalConfig);
        } catch (_error) {
          toast.error("Session time out. Please login again.", {
            id: "sessionTimeOut",
          });
          // Logging out the user by removing all the tokens from local
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          // Redirecting the user to the landing page
          window.location.href = window.location.origin;
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default axiosClient;
