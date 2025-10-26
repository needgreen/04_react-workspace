import React, { useState } from "react";

function Hobby() {
  // 선택된 취미들 저장하는 배열
  const [hobbies, setHobbies] = useState([]);

  // 채크박스 이벤트 핸들러
  const handleCheckboxChange = (e) => {
    const value = e.target.value;

    // 체크 상태에 따라 배열 추가/삭제
    if (e.target.checked) {
      // 추가 => 기존 배열 + 새로운 값
      setHobbies([...hobbies, value]);
    } else {
      // 배열의 조건에 맞는 요소만 남겨서 새 배열로 만들기
      // 제거 => 체크 해제된 value만 제거하고 나머지 유지
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="reading"
        value="reading"
        checked={hobbies.includes("reading")}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="reading">📚 독서</label> <br />
      <input
        type="checkbox"
        id="music"
        value="music"
        checked={hobbies.includes("music")}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="music">🎵 음악</label> <br />
      <input
        type="checkbox"
        id="sports"
        value="sports"
        checked={hobbies.includes("sports")}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="sports">🏓 운동</label> <br />
      <input
        type="checkbox"
        id="coding"
        value="coding"
        checked={hobbies.includes("coding")}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="coding">💻 코딩</label>
      <h5>선택된 취미</h5>
      {/* 취미 배열이 0 이라면 없음 표시, 배열의 각 요소를 span으로 반환 */}
      {hobbies.length === 0 ? (
        <span>없음</span>
      ) : (
        hobbies.map((hobby, index) => <span key={index}> {hobby} </span>)
      )}
    </>
  );
}

export default Hobby;
