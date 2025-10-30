import React, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import { getMenuList } from "../api/MenuAPI";
import MenuSearchForm from "../components/MenuSearchForm";

// 메뉴 목록 페이지용 컴포넌트
function Menus() {
  // 전체 메뉴 목록
  // const menus = getMenus();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(getMenuList());
  }, []);

  return (
    <>
      <div className="content-title">Menus</div>
      {/* 검색폼 컴포넌트 */}
      <MenuSearchForm />

      {/* 메뉴 목록 컴포넌트*/}
      <MenuList menus={menus} />
    </>
  );
}

export default Menus;
