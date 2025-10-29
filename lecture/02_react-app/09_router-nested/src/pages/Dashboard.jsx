import React from "react";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  const linkStyle = {
    color: "#2b6013ff",
    fontWeight: "medium",
    textDecoration: "none",
  };

  const dashboardData = {
    numOfUsers: 100,
    numOfOrders: 1000,
  };

  return (
    <div>
      <h2>대시보드</h2>
      <nav>
        <Link style={linkStyle} to="">
          대시보드 홈
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="settings">
          설정
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="analytics">
          분석
        </Link>
      </nav>
      <div>
        <h4>대시보드 콘텐츠</h4>
        <Outlet context={dashboardData} />
      </div>
    </div>
  );
}

export default Dashboard;
