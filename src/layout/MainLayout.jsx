import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";

function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
