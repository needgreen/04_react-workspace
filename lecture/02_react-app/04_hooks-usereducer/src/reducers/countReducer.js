function countReducer(state, action) {
  // (state = 현재의 값, action={type:"요청 관련 타입", payload: 요청 처리 시 필요한 데이터 전달} )
  // 반환 => 새로운 상태값
  // 여러 조건을 비교할 때 switch문 사용 (if/else 보다 깔끔)
  switch (action.type) {
    // 대문자로 사용하는 이유는 상수(불변)임을 표시하기 위함 - 상수 네이밍 규칙(upper snake case 작성)
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

export default countReducer;
