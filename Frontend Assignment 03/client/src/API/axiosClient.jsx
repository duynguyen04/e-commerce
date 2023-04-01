// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs
const axiosClient = axios.create({
  baseURL: "https://server-asm3.glitch.me", //"https://server-asm3.glitch.me",
  headers: {
    "content-type": "application/json",
  },
  validateStatus: null,
  withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    // if (response && response.data) {
    //   return response.data;
    // }
    return response;
  },
  (error) => {
    // Handle errors
    // return error;
    throw error.response;
  }
);
// const myInterceptor = axios.interceptors.request.use(function () {
//   /*...*/
// });
// axios.interceptors.request.eject(myInterceptor);
export default axiosClient;
