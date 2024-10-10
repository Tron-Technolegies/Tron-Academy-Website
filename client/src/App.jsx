import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/error/ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", errorElement: <ErrorPage />, element: <Layout /> },
  ]);

  return <RouterProvider router={router} />;
}
