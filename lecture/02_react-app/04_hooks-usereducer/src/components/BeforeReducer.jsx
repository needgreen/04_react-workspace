import React, { useState } from "react";

// reducer 개념 사용 전 - useState를 활용한 상태관리
// 함수가 늘어날 수록 상태관리가 복잡해지고 재사용이 어려움
function BeforeReducer() {
  const [count, setCount] = useState(0);

  const handleCountIncrease = () => {
    setCount(count + 1);
  };

  const handleCountDecrease = () => {
    setCount(count - 1);
  };

  const handleCountReset = () => {
    setCount(0);
  };

  const handleCountIncreaseByNum = (num) => {
    setCount(count + num);
  };

  return (
    <>
      <h2>카운터: {count}</h2>
      <button onClick={handleCountIncrease}>+1 증가</button>
      <button onClick={handleCountDecrease}>-1 감소</button>

      <button onClick={handleCountReset}>초기화</button>
      <button onClick={() => handleCountIncreaseByNum(5)}>+5 증가</button>
    </>
  );
}

export default BeforeReducer;
