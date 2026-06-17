import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});


// Request Interceptor
// Automatically adds token to headers

api.interceptors.request.use(

  (config) => {

    if (typeof window !== "undefined") {

      const token = localStorage.getItem("token");

      if (token) {

        config.headers.Authorization = `Bearer ${token}`;

      }

    }

    return config;

  },

  (error) => {

    return Promise.reject(error);

  }

);


// Response Interceptor
// Handle unauthorized errors

api.interceptors.response.use(

  (response) => {

    return response;

  },

  (error) => {

    if (

      error.response &&

      error.response.status === 401

    ) {

      localStorage.removeItem("token");

      localStorage.removeItem("user");

      window.location.href = "/login";

    }

    return Promise.reject(error);

  }

);


export default api;