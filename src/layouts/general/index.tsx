import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const GeneralLayout = (props: Props) => {
  return (
    <div>
      <h1>General</h1>
      <Outlet />
    </div>
  );
};

export default GeneralLayout;
