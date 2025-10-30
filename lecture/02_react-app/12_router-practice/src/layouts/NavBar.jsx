import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/menus">메뉴 목록</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
