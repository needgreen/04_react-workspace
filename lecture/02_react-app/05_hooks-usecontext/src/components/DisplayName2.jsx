import React from "react";
import { useContext } from "react";
import { NameContext } from "./NameShareApp2";

// 상태변수(현재 선택된 이름)

function DisplayName2() {
  // NameContext 객체를 구독해서 해당 컨텍스트에 저장된 내용을 꺼내서 사용
  // 그 구문이 useContext 훅을 이용 (createContext와 세트로 사용)
  const { currentName } = useContext(NameContext); // value 로 정의한 객체가 반환 {name:[], currentName:xxx, ..}

  return (
    <>
      <h2>현재 선택된 이름 : {currentName} </h2>
    </>
  );
}

export default DisplayName2;
