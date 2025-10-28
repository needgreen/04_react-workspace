import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function ObjectTypeExample() {
  console.log("해당 컴포넌트 렌더링 됨");

  const [inputValue, setInputValue] = useState(""); // tv 객체와 연관성이 없는 state
  const [isSale, setIsSale] = useState(false); // tv 객체와 연ㅇ관이 있는 state

  /* 컴포넌트 렌더링 시마다 매번 새로운 객체 생성 => 메모리 낭비
  const tv = {
    brand: "samsung",
    size: 65,
    price: isSale ? "할인가 1,000,000원" : "정가 2,000,000원",
  };
*/

  // isSale 값이 변경될 때만 새로운 객체 생성
  const tv = useMemo(() => {
    return {
      brand: "samsung",
      size: 65,
      price: isSale ? "할인가 1,000,000원" : "정가 2,000,000원",
    };
  }, [isSale]);
  // isSale 값이 변할 때만 tv 객체를 재할당하게끔

  useEffect(() => {
    console.log("현재 tv 객체 정보:", tv);
  }, [tv]);
  // (()=>{},[tv])에서 tv 변수의 참조값 변경 감지 - 매 렌더마다 새 객체로 인식됨
  // [] 빈 배열로 하면 한 번만 실행, 또는 useMemo 활용

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setIsSale(!isSale)}>할인 여부 변경</button>
    </>
  );
}

export default ObjectTypeExample;
