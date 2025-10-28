import React from "react";
import DisplayName from "./DisplayName";
import ChangeName from "./ChangeName";
import { useState } from "react";

function NameShareApp() {
  // 샘플 데이터 - 배열
  const names = ["김코딩", "신랄라", "윤룰루", "박하하"];
  const [currentName, setCurrentName] = useState("김코딩");

  return (
    <>
      <h1>이름 공유 앱</h1>

      {/* 현재 선택된 이름이 display되는 컴포넌트 */}
      <DisplayName currentName={currentName} />

      {/* 현재 선택되는 이름을 변경시켜주는 버튼 목록 컴포넌트 */}
      <ChangeName setCurrentName={setCurrentName} names={names} />
    </>
  );
}

export default NameShareApp;
