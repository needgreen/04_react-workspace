import { createContext, useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { cartReducer, initialState } from "./reducers/CartReducer";

// return 되는 div 하위 컴포넌트에서 모두 사용할 수 있도록
export const CartContext = createContext();

function App() {
  // useReducer(리듀서 함수, 상태초기값)
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ items: state.items, dispatch }}>
      <div className="app-container">
        <ProductList />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
