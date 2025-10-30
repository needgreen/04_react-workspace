import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <main className="content">
        {/* 라우팅되는 페이지별 콘텐츠 표현 자리 */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
