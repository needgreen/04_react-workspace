import React from "react";

function Example2() {
  // [상태값, 상태업데이트함수] = React.useState(초기값)
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <>
      <h2>체크박스와 state</h2>
      <input
        type="checkbox"
        id="chk"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="chk">체크박스</label>
      <h5>입력상태: {isChecked ? "체크됨" : "체크안됨"} </h5>
    </>
  );
}

export default Example2;
