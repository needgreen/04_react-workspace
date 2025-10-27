import React, { useEffect, useState } from "react";

// 의존성 배열에 특정 값을 지정해놓는 경우
function Example3() {
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  useEffect(() => {
    console.log("Example3 의 useEffect의 setUp 함수 동작");
  }, [date.month, date.day]); // [setUp 함수를 언제 동작 시킬지 작성]
  // setUp 함수 동작 시점
  // 1. 최초 렌더링 시 Mount
  // 2. 의존성 배열에 지정된 값 변화시

  const handleDateChange = (e) => {
    // 객체 구조로 전달하므로 호출도 객체로 전달
    setDate({
      ...date, // {} 안에 있는 객체를 해체 - 전개 연산자
      [e.target.id]: e.target.value, // 현재 change된 입력값만 변경
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="년도"
        id="year"
        value={date.year}
        onChange={handleDateChange}
      />
      <input
        type="text"
        placeholder="월"
        id="month"
        value={date.month}
        onChange={handleDateChange}
      />
      <input
        type="text"
        placeholder="일"
        id="day"
        value={date.day}
        onChange={handleDateChange}
      />

      <h2>
        입력날짜 : {date.year}년 {date.month}월 {date.day}일{" "}
      </h2>
    </div>
  );
}

export default Example3;
