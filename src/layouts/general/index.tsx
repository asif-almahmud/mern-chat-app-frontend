import { Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const GeneralLayout = (props: Props) => {
  return (
    <div>
      <Typography>General</Typography>
      <Outlet />
    </div>
  );
};

export default GeneralLayout;
