import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

// DOM 요소 직접 접근하는 사용 예시
function Example2() {
  // 컴포넌트 렌더링 시 해당 텍스트 상자에 포커싱(focusing) 효과 주기

  // 1)  useRef 호출 - 빈 ref 객체 생성
  // 컴포넌트가 렌더링 되지 않아 DOM 생성 전이므로 초기 값 반환 형태 {current: undefined}
  const inputRef = useRef();
  useEffect(() => {
    // 3) 렌더링 후 실행 - input DOM 요소가 저장되어 있으므로 focus() 메소드 호출
    inputRef.current.focus();
  }, []); // 빈 배열 = 컴포넌트 마운트 시 1회 실행

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        // 2) input 요소 생성 : inputRet == {current: input DOM 요소 객체}
      />
    </>
  );
}

export default Example2;
