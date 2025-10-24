import React, { useState } from "react";

function Example6() {
  // 상태 관리
  // 1. 사용자 입력값
  // 2. 동물 목록 데이터

  const [inputValue, setInputValue] = useState("");
  const [animals, setAnimals] = useState([]);

  // 추가 버튼 클릭 시 동작될 함수
  const handleAddAnimal = () => {
    // 사용자 입력값 => animals 배열에 추가 (animals 상태 변수 업데이트)
    // animals.push(inputValue) // 상태변수 직접 수정 => 리액트가 변경 감지 못함
    setAnimals([
      // (새로운 배열 === 기존 배열의 요소들 유지+ 새로운 값) =>
      ...animals, // 전개 배열 - 기존 animals 배열 요소 전부
      inputValue, // 새로 입력된 동물값
    ]);

    // 사용자 입력값 초기화
    setInputValue("");
  };

  return (
    <>
      <h2>배열 활용</h2>
      <input
        type="text"
        placeholder="추가할 동물 입력"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddAnimal}>추가</button>

      <h5>현재 추가된 동물 목록</h5>
      <ul>
        {/* 추가되는 동물 목록 => li */}
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </>
  );
}

export default Example6;
