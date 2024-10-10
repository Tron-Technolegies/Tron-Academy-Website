import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <div className="mx-0 overflow-hidden">
      <Header />
      <div className="h-[300px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
