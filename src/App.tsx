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
import Login from "./pages/login";
import Chat from "./pages/chat";
import { Box, Button, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { theme } from "./theme/theme";

const queryClient = new QueryClient();

const user = false;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={user ? <Home /> : <Navigate to="login" />} />
        <Route path="login" element={<Login />} />
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
