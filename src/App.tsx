import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import GeneralLayout from "./layouts/general";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Chat from "./pages/chat";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<Home />} />
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
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
