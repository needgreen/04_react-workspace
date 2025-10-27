import React, { useReducer } from "react";
import countReducer from "../reducers/countReducer";

// 상태 변경 로직을 컴포넌트 외부 함수(reducer)로 관리(정의)
// state 를 특정 액션에 따라 관리 가능
/*
function countReducer(state, action) {
  // (state = 현재의 값, action={type:"요청 관련 타입", payload: 요청 처리 시 필요한 데이터 전달} )
  // 반환 => 새로운 상태값
  // 동등 비교의 경우 switch문 사용
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return 0;
    case "ADD":
      return state + action.payload;
    case "MINUS":
      return state - action.payload;
    default:
      return state; // 기존 값 반환
  }
}
*/

function AfterReducer() {
  // useReducer 리액트 함수 호출, 초기값
  const [count, dispatch] = useReducer(countReducer, 0); // 배열로 반환 [0, f] ==> 0은 초기 state 값, f는 액션을 발생시키는 함수가 담겨 반환

  return (
    <>
      <h2>카운터: {count} </h2>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+1 증가</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-1 감소</button>

      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
      <button onClick={() => dispatch({ type: "ADD", payload: 5 })}>
        +5 증가
      </button>
      <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>
        +10 증가
      </button>
      <button onClick={() => dispatch({ type: "MINUS", payload: 10 })}>
        -10 감소
      </button>
    </>
  );
}

export default AfterReducer;
