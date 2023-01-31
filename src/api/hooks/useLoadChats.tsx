import React from "react";
import { useQuery } from "react-query";
import { fetchChats } from "../requests/fetchChats";

const useLoadChats = () => {
  return useQuery("chats", fetchChats);
};

export default useLoadChats;
