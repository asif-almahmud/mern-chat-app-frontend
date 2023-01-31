import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import GeneralLayout from "./layouts/general";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// Pages
import Home from "./pages/home";
import Chat from "./pages/chat";
import { Box, Button, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { theme } from "./theme/theme";
import Authorize from "./pages/authorize";

const queryClient = new QueryClient();

const user = false;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={user ? <Home /> : <Navigate to="authorize" />} />
        <Route path="authorize" element={<Authorize />} />
        <Route path="chat">
          <Route path=":id" element={<Chat />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: (theme) => theme.palette.secondary.main }}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
