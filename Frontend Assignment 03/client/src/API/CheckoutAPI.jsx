import axiosClient from "./axiosClient";
const CheckoutAPI = {
  postEmail: (query) => {
    const url = `/email${query}`;
    return axiosClient.post(url);
  },
  postOrder: (data) => {
    return axiosClient.post("/checkout", data);
  },
};

export default CheckoutAPI;
