import React, { useEffect, useState } from "react";

// 의존성 배열이 빈 배열일 경우 - 최초 렌더링 시에만 동작(Mount)
function Example2() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  // 실행코드는 {} 안에 작성
  useEffect(() => {
    console.log("Example2 컴포넌트 렌더링 됨");
  }, []);

  const handleNowClick = () => {
    setNow(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <button onClick={handleNowClick}>Now</button>
      <h2>현재 시간: {now} </h2>
    </div>
  );
}
export default Example2;
