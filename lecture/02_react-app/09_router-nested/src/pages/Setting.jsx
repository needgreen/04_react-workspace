import React from "react";
import { useOutletContext } from "react-router-dom";

function Setting() {
  const { numOfUsers, numOfOrders } = useOutletContext(); // 공통으로 저장된 데이터 {numOfUsers:xx, numOfOrders:xx}를 꺼내 쓸 수 있음

  return (
    <div>
      <h5>대시보드 - 설정페이지</h5>
      <p>유저 수 : {numOfUsers} </p>
      <p>주문 수 : {numOfOrders} </p>
    </div>
  );
}

export default Setting;
