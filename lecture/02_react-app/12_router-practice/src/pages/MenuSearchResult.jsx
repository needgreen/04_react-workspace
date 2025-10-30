import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MenuList from "../components/MenuList";
import { searchMenus } from "../api/MenuAPI";

function MenuSearchResult() {
  const [menus, setMenus] = useState([]);
  const [searchParams] = useSearchParams(); //[URLSearchParams 객체]

  const condition = searchParams.get("condition");
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    setMenus(searchMenus(condition, keyword));
  }, [condition, keyword]);

  return (
    <>
      <div
        className="content-title"
        style={{ fontSize: "44pt", padding: "40px 0px" }}
      >
        메뉴 검색 결과 페이지
      </div>
      <MenuList menus={menus} />
    </>
  );
}

export default MenuSearchResult;
