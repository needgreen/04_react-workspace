import React from "react";
import "./ProductList.css";
import products from "../data/products.json";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div>
      <h2>상품 목록</h2>
      <div className="product-list-grid">
        {/* <!-- 상품 아이템(ProductItem)들 배치 자리 --> */}
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
          // 생성되는 객체 배열에는 key 값 설정 필요 === key={product.id}
        ))}
      </div>
    </div>
  );
}

export default ProductList;
