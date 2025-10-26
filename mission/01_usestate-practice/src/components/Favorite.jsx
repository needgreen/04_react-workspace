import React, { useState } from "react";

function Favorite() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");

  const colorNames = {
    green: "green",
    yellow: "yellow",
    orange: "orange",
    blue: "blue",
  };

  const fruitNames = {
    banana: "🍌 banana",
    apple: "🍎 apple",
    melon: "🍈 melon",
    kiwi: "🥝 kiwi",
  };

  const handleSelectColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleSelectFruitChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  return (
    <>
      <div>
        <p>
          좋아하는 색상 :
          <select value={selectedColor} onChange={handleSelectColorChange}>
            <option value="green">그린</option>
            <option value="yellow">옐로우</option>
            <option value="orange">오렌지</option>
            <option value="blue">블루</option>
          </select>
        </p>
        <p>
          좋아하는 과일 :
          <select value={selectedFruit} onChange={handleSelectFruitChange}>
            <option value="banana">🍌 바나나</option>
            <option value="apple">🍎 사과</option>
            <option value="melon">🍈 멜론</option>
            <option value="kiwi">🥝 키위</option>
          </select>
        </p>
        <p>선택한 색상 : {colorNames[selectedColor]} </p>
        <p>선택한 과일 : {fruitNames[selectedFruit]} </p>
      </div>
    </>
  );
}

export default Favorite;
