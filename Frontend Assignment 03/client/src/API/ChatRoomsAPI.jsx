import axiosClient from "./axiosClient";

const ChatRoomsAPI = {
  getMessageByRoomId: (Id) => {
    const url = `/chat/${Id}`;
    return axiosClient.get(url);
  },

  createNewRoom: () => {
    const url = `/chatrooms/createNewRoom`;
    return axiosClient.post(url);
  },

  addMessage: (body) => {
    const url = `/chat`;
    return axiosClient.post(url, body);
  },
};

export default ChatRoomsAPI;
