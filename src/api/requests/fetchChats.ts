import axiosClient from "../axios-client";

export const fetchChats = () => {
  return axiosClient.get("/chats");
};
