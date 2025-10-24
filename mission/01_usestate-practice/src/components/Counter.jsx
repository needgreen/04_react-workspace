import React from "react";

function Counter() {
  const [number, setNumber] = React.useState(0);

  const handleDecrease = () => {
    setNumber(number - 1);
  };

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleReset = () => {
    setNumber(0);
    console.log("초기화 됨");
  };

  return (
    <>
      <h5>카운트: {number}</h5>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset}>초기화</button>
      <button onClick={handleIncrease}>+1</button>
    </>
  );
}

export default Counter;
