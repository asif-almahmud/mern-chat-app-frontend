import React from "react";
import LoginForm from "../../components/login-form";
import SignupForm from "../../components/signup-form";
import useTabView from "../../hooks/useTabView";

type Props = {};

const tabs = [
  { label: "login", view: <LoginForm /> },
  { label: "signup", view: <SignupForm /> },
];

const Login = (props: Props) => {
  const Tabs = useTabView({ tabs });
  return <div>{Tabs}</div>;
};

export default Login;
