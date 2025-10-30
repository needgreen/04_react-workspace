import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menus from "./pages/Menus";
import MenuDetail from "./pages/MenuDetail";
import MenuSearchResult from "./pages/MenuSearchResult";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";

function App() {
  /**
   * /                 메인페이지                              MainLayout + Outlet(Home)
   * /about            소개페이지                              MainLayout + Outlet(About)
   * /menus            메뉴 목록페이지                         MainLayout + Outlet(Menus)
   * /menus/id         메뉴 상세페이지                         MainLayout + Outlet(MenuDetail)
   * /menus/search     메뉴검색 결과페이지(쿼리스트링 사용)    MainLayout + Outlet(MenuSearchResult)
   *
   */
  return (
    <>
      {/* <Routes> */}
      {/* 부모라우트 설정 */}
      {/* <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} /> */}
      {/* 방법 1 
          <Route path="menus" element={<Menus />} />
          <Route path="menus:id" element={<MenuDetail />} />
          <Route path="menus/search" element={<MenuSearchResult />} /> 
          */}

      {/* 방법 2 - 중첩 라우팅 방식
            <Route path="menus" element={<Menus />}> - 자식 컴포넌트가 부모 컴포넌트(Menus)의 아울렛 안으로 들어가려고 함 
            중첩 라우팅 방식을 할 때는 부모 컴포넌트를 따로 분리해줘야 함 */}
      {/* <Route path="menus">
            <Route index element={<Menus />} />
            <Route path=":id" element={<MenuDetail />} />
            <Route path="search" element={<MenuSearchResult />} />
          </Route>
        </Route>
      </Routes> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
