import React from "react";
import MenuItem from "./MenuItem";

// 메뉴 목록 컴포넌트
function MenuList({ menus }) {
  // 렌더링 시킬 메뉴 목록 데이터 전달 받기 - {} 형태로 menus에 기록
  // menus === [{},{}, ...]

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {menus.map((menu) => (
        <MenuItem key={menu.menuCode} menu={menu} />
      ))}
    </div>
  );
}

export default MenuList;
