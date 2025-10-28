import React from "react";

// 상태 업데이트 함수, 이름 데이터 (names)

function ChangeName({ setCurrentName, names }) {
  return (
    <>
      {names.map((name, index) => (
        // 매개변수 데이터가 없으므로 index 사용
        <button key={index} onClick={() => setCurrentName(name)}>
          {name}
        </button>
      ))}
    </>
  );
}

export default ChangeName;
