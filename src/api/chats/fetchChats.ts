import axios from "axios";

const url = "http://localhost:5000/api/chats";
export const fetchChats = () => {
  return axios.get(url);
};
