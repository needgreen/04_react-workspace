import React from "react";
import { useNavigate } from "react-router-dom";

// 메뉴 한 개에 대한 컴포넌트
function MenuItem({ menu }) {
  // menu === {menuCode:xx, menuName: xx, ..}

  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate(`/menus/${menu.menuCode}`);
  };

  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fafafa",
        border: "1px solid #fff",
        borderRadius: "20px",
        padding: "0px 10px",
        cursor: "pointer",
      }}
      onClick={handleMenuClick}
    >
      <h4>메뉴명: {menu.menuName} </h4>
      <p>가격: {menu.menuPrice.toLocaleString()}원 </p>
    </div>
  );
}

export default MenuItem;
