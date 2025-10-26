import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <>
      <p>
        숫자 1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </p>
      <p>
        숫자 2:
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </p>
      <p>
        덧셈: {num1} + {num2} = {num1 + num2}
      </p>
      <p>
        뺄셈: {num1} - {num2} = {num1 - num2}
      </p>
      <p>
        {/* toFixed(n) 소수점 아래 n자리까지 반올림해서 문자열로 반환해주는 메소드 */}
        곱셈: {num1} * {num2} = {num1 * num2.toFixed(2)}
      </p>
      <p>
        나눗셈: {num1} ÷ {num2} ={(num1 / num2).toFixed(2)}
      </p>
    </>
  );
}

export default Calculator;
