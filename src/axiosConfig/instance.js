import axios from "axios";
// import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,

});

export default axiosInstance;

        
//     if (accessToken) {
//       axiosInstance.defaults.headers['Authorization'] = accessToken ;
//     }

//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
