import React from "react";
import { useSearchParams } from "react-router-dom";

function Info() {
  const [searchParams] = useSearchParams(); // [URLSearchParams 객체, 쿼리 ]

  // const name => 변수 기록하기
  const name = searchParams.get("name") || "Guest";
  const age = searchParams.get("age") || 0;

  return (
    <div>
      <h5>Info 페이지</h5>
      <p>
        Welcome {name}! {age > 0 && `You ar ${age} years old.`}
      </p>
    </div>
  );
}

export default Info;
