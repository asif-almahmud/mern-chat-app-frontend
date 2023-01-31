import React from "react";
import LoginForm from "../../components/login";
import SignupForm from "../../components/signup";
import useTabView from "../../hooks/useTabView";

type Props = {};

const tabs = [
  { label: "login", view: <LoginForm /> },
  { label: "signup", view: <SignupForm /> },
];

const Authorize = (props: Props) => {
  const Tabs = useTabView({ tabs });
  return <div>{Tabs}</div>;
};

export default Authorize;
