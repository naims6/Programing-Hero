import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[600px] pt-[4rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
