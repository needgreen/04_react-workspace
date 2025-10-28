import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function AfterUseMemo() {
  console.log("컴포넌트가 렌더링 됨..");

  const [num1, setNum1] = useState(0);
  const operation1 = () => {
    console.log("operation1 함수 실행");
    for (let i = 0; i < 1000000000; i++) {} // 가상의 시간이 오래 걸리는 연산
    return num1 + 1;
  };

  // const result1 = operation1(); // operation1 함수 실행해서 result1 결과 받는 건 num1이 변경될 때만 수행시키기
  const result1 = useMemo(() => {
    return operation1();
  }, [num1]); // num1 의 변화에서만 동작되도록

  const [num2, setNum2] = useState(0);
  const operation2 = () => {
    console.log("operation2 함수 실행");
    return num2 + 1;
  };
  const result2 = operation2();

  return (
    <>
      <h2>오버헤드 연산</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <div>
        {num1} + 1 = {result1}
      </div>

      <h2>일반 연산</h2>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <div>
        {num2} + 1 = {result2}
      </div>
    </>
  );
}

export default AfterUseMemo;
