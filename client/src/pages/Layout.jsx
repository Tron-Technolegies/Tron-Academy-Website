import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <div className="mx-0 ">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="overflow-hidden">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
