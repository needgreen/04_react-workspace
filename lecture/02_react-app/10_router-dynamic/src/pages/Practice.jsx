import React from "react";
import { useParams } from "react-router-dom";

/**
 *
 * /practice/it/2
 * /practice/it/5
 * /practice/history/1
 * /practice/art/5
 *
 */

function Practice() {
  const { category, id } = useParams();

  return (
    <div>
      <h3>Practice 페이지</h3>
      <p>현재 카테고리 : {category} </p>
      <p>현재 아이디 : {id}</p>
    </div>
  );
}

export default Practice;
