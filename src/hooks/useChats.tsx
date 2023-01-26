import React from "react";
import { useQuery } from "react-query";
import { fetchChats } from "../api/chats/fetchChats";

const useChats = () => {
  return useQuery("chats", fetchChats);
};

export default useChats;
