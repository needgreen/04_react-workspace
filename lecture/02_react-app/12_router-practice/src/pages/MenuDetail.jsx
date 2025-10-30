import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuAPI";

// 특정 메뉴의 상세 페이지용 컴포넌트
// /menus/:id 의 링크에 대한 렌더링

function MenuDetail() {
  const [menu, setMenu] = useState();
  const { id } = useParams();
  // 세그먼트에 할당된 값 꺼낼 수 있음 {id: "xx", }

  useEffect(() => {
    setMenu(getMenuDetail(id));
  }, []);

  return (
    <>
      <div className="content-title" style={{ paddingBottom: "40px" }}>
        MenuDetail
      </div>

      {menu ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={menu.detail.image} alt={menu.menuName} width="460px" />
          <div
            style={{ color: "#331b3f", width: "460px", paddingLeft: "40px" }}
          >
            <h4>메뉴명 : {menu.menuName} </h4>
            <h4>가격 : {menu.menuPrice.toLocaleString()}원</h4>
            <h4>카테고리 : {menu.categoryName}</h4>
            <h4>주문가능여부 : {menu.isOrderable ? "가능" : "불가능"}</h4>
            <h4>상세설명 : {menu.detail.description}</h4>
          </div>
        </div>
      ) : (
        <div> 조회된 메뉴가 없습니다.</div>
      )}
    </>
  );
}

export default MenuDetail;
