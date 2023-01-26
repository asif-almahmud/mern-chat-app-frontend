import React from "react";
import { Link } from "react-router-dom";
import useChats from "../../hooks/useChats";
import { IChat } from "../../types/types";

const Home = () => {
  const { data, isLoading } = useChats();
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {data?.data.map((chat: IChat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
      <Link to="login">Login</Link>
      <Link to="chat/wdfjnsodnc">Chat</Link>
    </div>
  );
};

export default Home;
