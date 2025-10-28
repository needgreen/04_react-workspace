import React from "react";
import { useRef } from "react";
import { useState } from "react";

function Example1() {
  console.log("컴포넌트 렌더링 됨");

  const [count, setCount] = useState(0); // [0. f]
  const countRef = useRef(0);
  // useRef 는 객체{} 형태로 반환 - {current: 0}
  // 이 값을 const 로 변수 선언

  const handleCountChange = () => {
    setCount(count + 1); // state 값 변경 시 컴포넌트 리렌더링 발생
  };

  const handleCountRefChange = () => {
    countRef.current += 1; // ref 값 변경 시 컴포넌트 리렌더링 안됨
  };

  return (
    <>
      <button onClick={handleCountChange}>state(count) 값 변경</button>
      <button onClick={handleCountRefChange}>ref(countRef) 값 변경</button>

      <h2>
        state(count) 값: {count}, ref(countRef) : {countRef.current}
      </h2>
    </>
  );
}

export default Example1;
