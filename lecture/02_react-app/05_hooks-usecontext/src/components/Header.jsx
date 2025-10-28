import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Header() {
  const { isDark } = useContext(ThemeContext);

  return (
    // 백틱`` 내에서는 표현식 삽입구문${} 사용
    <header className={`header ${isDark ? "dark-mode" : ""}`}>
      <h1>This is Header</h1>
    </header>
  );
}

export default Header;
