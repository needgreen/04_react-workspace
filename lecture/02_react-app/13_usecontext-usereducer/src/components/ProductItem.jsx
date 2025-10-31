import React, { useContext } from "react";
import "./ProductItem.css";
import { CartContext } from "../App";

/***
 *
 * @returns
 *  상품명              name
 *  상품간단설명        description
 *  가격                price
 *  장바구니에 추가
 * <ProductItem product = {상품객체} />
 *  product === {id: xx, name: xx, price: xx, description: xx}
 */

function ProductItem({ product }) {
  const { dispatch } = useContext(CartContext); // { items: [], dispatch: f=함수 }
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    });
  };

  return (
    <div className="product-item">
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price.toLocaleString()}원</p>
      <button className="product-add-button" onClick={handleAddToCart}>
        장바구니에 추가
      </button>
    </div>
  );
}

export default ProductItem;
