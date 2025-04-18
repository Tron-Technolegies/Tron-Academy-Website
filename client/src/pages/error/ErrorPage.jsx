import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col gap-5 justify-center items-center">
      <Helmet>
        <title>404 Error</title>
      </Helmet>
      <div className="text-5xl text-primary font-bold">404!</div>
      <p className="text-lg">The page you are looking is not found.</p>
      <Link
        to={"/"}
        className="px-4 py-2 rounded-lg bg-primary hover:bg-hoverPrimary hover-animation text-white"
      >
        Back Home
      </Link>
    </div>
  );
}
