import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/Home/HomePage";
import CoursePage from "./pages/Course/CoursePage";
import BlogPage from "./pages/blog/BlogPage";
import TeamPage from "./pages/team/TeamPage";
import AboutPage from "./pages/about/AboutPage";
import SingleBlogPage from "./pages/blog/SingleBlogPage";
import CodingPage from "./pages/coding/CodingPage";
import DigitalmarketingPage from "./pages/digitalmarketing/DigitalmarketingPage";
import MultimediaPage from "./pages/multimedia/MultimediaPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "course",
          element: <CoursePage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "blog/:id",
          element: <SingleBlogPage />,
        },
        {
          path: "team",
          element: <TeamPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path : "coding-course-in-kerala",
          element : <CodingPage/>
        },
        {
          path: "Best-Digital-Marketing-Course-In-Kerala",
          element : <DigitalmarketingPage/>
        },
        {
          path : "Graphic-design-Course-in-Kerala",
          element : <MultimediaPage/>
        }
      ],
    },
    {
      path: "/privacy",
      element: <PrivacyPolicy />,
    },
  ]);

  return <RouterProvider router={router} />;
}
