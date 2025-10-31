// 초기 상태 관리 = 객체{ } 형태로 관리하는 것을 권장 (확장성이 좋은 형태)
const initialState = {
  items: [],
};

// state 매개변수에는 현재 상태 객체{} 전달 : {items: [id: xx, name: xx, ...], ...}
// action: dispatch에 의해 전달되는 객체 {type: "액션타입(상태변경)", payload: 상태 변경에 필요한 데이터}
function cartReducer(state, action) {
  switch (action.type) {
    // 정의해야 하는 액션
    // 1. 장바구니에 추가(필요한 데이터: 추가할 아이템 객체{id, name, price})
    case "ADD_TO_CART": {
      // 기존의 아이템으로 추가되어 있는지 찾기 ===  action.payload 에 담겨진 것에서 찾음
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // 1-1) 장바구니에 이미 존재하는 아이템일 경우 => 수량만 증가
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // 1-2) 장바구니에 없는 아이템이라면 => 신규 추가
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    }

    // 2. 장바구니 아이템 삭제(고유한 식별자 id 필요)
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        // 특정 아이템을 제외시키닌 배열
      };

    // 3. 장바구니 아이템 수량 증가(수량 증가할 아이템 id)
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    // 4. 장바구니 아이템 수량 감소(수량 감소할 아이템 id)
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // 최소 1보다 더 작아지지 않도록 설정 Math.max()
            : item
        ),
      };

    // 5. 장바구니 전체 삭제
    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

export { cartReducer, initialState };
