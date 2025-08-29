// src/components/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./Scroll";

const Layout = () => {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/adminlogin";

  if (hideLayout) {
    return (
      <>
        <ScrollToTop />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen p-4">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
