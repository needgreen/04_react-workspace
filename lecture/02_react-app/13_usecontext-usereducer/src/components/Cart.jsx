import React from "react";
import "./cart.css";
import CartItem from "./CartItem";
import { CartContext } from "../App";
import { useContext } from "react";

function Cart() {
  // 장바구니 아이템 목록
  // 상태관리 === [{id: xx, name: xx, price: xx, quantity: xx}, {id: xx, name: xx, price: xx, quantity: xx}, ...]
  // 아이템 존재 여부 .length > 0

  const { items, dispatch } = useContext(CartContext);

  let totalQuantity = 0;
  let totalPrice = 0;
  for (const item of items) {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  }

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>장바구니 ({totalQuantity})</h2>

        {/* 장바구니에 담긴 아이템이 있으면 전체 삭제 버튼 표시 */}
        {/* 조건 내용 && 조건내용이 true일 때 우측 내용 반환 */}
        {items.length > 0 && (
          <button className="cart-clear-button" onClick={handleClearCart}>
            전체 삭제
          </button>
        )}
      </div>

      {/* case1. 장바구니가 비어있을 경우  */}
      {/* case2. 장바구니에 아이템이 있을 경우 */}

      {/* jsx 문법에서 리턴값은 단일태그(<>또는<div>)로 묶어야함 */}
      {/* 삼항연산자를 이용 ? 장바구니가 비어있을때 : 비어있지 않았을때 */}

      {items.length === 0 ? (
        <p className="cart-empty">장바구니가 비어있습니다</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span>총 금액:</span>
              <span className="cart-total-price">
                {totalPrice.toLocaleString()}원
              </span>
            </div>
            <button className="cart-order-button">주문하기</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
