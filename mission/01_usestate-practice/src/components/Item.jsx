import React, { useState } from "react";

function Item() {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <button onClick={() => setSelectedItem("사과")}>사과</button>
      <button onClick={() => setSelectedItem("바나나")}>바나나</button>
      <button onClick={() => setSelectedItem("오렌지")}>오렌지</button>
      <button onClick={() => setSelectedItem("포도")}>포도</button>
      <button onClick={() => setSelectedItem("딸기")}>딸기</button>

      <p>선택된 과일: {selectedItem ? selectedItem : "없음"} </p>
      {selectedItem && <p>🎉 {selectedItem}를 선택하셨습니다!</p>}
    </>
  );
}

export default Item;
