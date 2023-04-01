import axiosClient from "./axiosClient";

const UserAPI = {
  getAllData: () => {
    const url = "/users";
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  postSignUp: (data) => {
    const url = `/users/signup/`;
    return axiosClient.post(url, data);
  },
  postSignIn: (data) => {
    const url = `/users/signin/`;
    return axiosClient.post(url, data);
  },
  postLogout: () => {
    return axiosClient.post("/logout");
  },
};

export default UserAPI;
