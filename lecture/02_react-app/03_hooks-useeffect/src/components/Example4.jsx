import React, { useEffect, useState } from "react";

function Example4() {
  // 상태관리 1) 타이머 시간(초)
  const [seconds, setSeconds] = useState(0);
  // 상태관리 2) 타이머 상태
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    console.log("setup 함수 실행");

    let intervalId = null;

    // 타이머 상태가 true일 때만 1초 간격마다 현재 초를 1씩 증가하는 타이머 설정
    if (isRunning) {
      intervalId = setInterval(() => {
        // setSeconds(seconds + 1);
        // => interval 특성 상 setSeconds(0 + 1)로 저장 == 클로저 캡쳐
        setSeconds((prev) => prev + 1); // 함수형 업데이트 방식 사용
      }, 1000);
    }

    // cleanup 함수 : return 함수 반환
    // 컴포넌트가 Unmount 또는 useEffect의 setUp 함수가 다시 실행되기 전 함수 작성
    return () => {
      console.log("cleanup 함수 실행");
      // 현재 생성된 타이머 정리
      clearInterval(intervalId);
    };
  }, [isRunning]); // isRunning 동작상태가 변할 때만 동작

  return (
    <div>
      <h2>타이머</h2>
      <h3> {seconds} </h3>
      <button onClick={() => setIsRunning(true)}>시작</button>
      <button onClick={() => setIsRunning(false)}>중지</button>
      <button
        onClick={() => {
          setSeconds(0);
          setIsRunning(false);
        }}
      >
        초기화
      </button>
      <p>상태: {isRunning ? "실행 중" : "정지됨"}</p>
    </div>
  );
}

export default Example4;
