import React, { useReducer, useState } from "react";

/**
 *
 * @param {*} reducer : 업무 규칙에 따라 일 처리해주는 은행 직원
 * @param {*} state : 현재 계좌 상태 {accountId: 현재 계좌번호, balance: 현재 계좌잔액}
 * @param {*} action : 고객이 작성한 입금 또는 출금 요청서
 * @param {*} dispatch : 고객이 요청서를 작성한 후 직원을 부르는 기능
 *
 */

function bankReducer(state, action) {
  switch (action.type) {
    case "입금":
      return { ...state, balance: state.balance + action.payload }; // 동일한 속성명 사용 시 덮어쓰여짐
    case "출금":
      return { ...state, balance: state.balance - action.payload };
    default:
      return { ...state };
  }
}

function ATM() {
  // 상태관리 1. 계좌정보 관리 - 입금, 출금 요청에 따라 잔액 정보가 수정
  const [account, dispatch] = useReducer(bankReducer, {
    accountId: "123-456-7891",
    balance: 10000,
  });

  // 상태관리 2. 사용자가 입력하는 금액값 관리
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h2>현재 계좌 번호: {account.accountId} </h2>
      <h2>현재 계좌 잔액: {account.balance} </h2>
      <input
        type="number"
        placeholder="금액"
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
      />
      <br />
      <button onClick={() => dispatch({ type: "입금", payload: amount })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: "출금", payload: amount })}>
        출금
      </button>
    </>
  );
}

export default ATM;
