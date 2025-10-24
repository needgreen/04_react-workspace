import React, { useState } from "react";

function Example5() {
  const [user, setUser] = useState({
    userId: "",
    userPwd: "",
  });

  /*
  const handleUserIdChange = (e) => {
    // user.userId = e.target.value;
    // 직접 수정 불가 - 기존 userPwd 유지, userId만 변경
    setUser({
      // 방법 1
      // userId: e.target.value,
      // userPwd: user.userPwd
      // 방법 2.
      ...user, // 전개 연산자. 기존 user 객체가 가진 값을 분해하고 userId 새로운 값만 변경
      userId: e.target.value,
    });
  };

  const handleUserPwdChange = (e) => {
    setUser({
      ...user,
      userPwd: e.target.value,
    });
  };
  */
  // 위의 이벤트 핸들러 함수 통합버전
  const handleUserChange = (e) => {
    setUser({
      ...user,
      // 식별자(예: name)로 구분, 프로퍼티 []로 묶어주기
      [e.target.name]: e.target.value, // 이벤트가 발생된 입력상자의 입력 값만 덮어쓰기
    });
  };

  const handleLoginSubmit = (e) => {
    if (!user.userId.trim() || !user.userPwd.trim()) {
      e.preventDefault();
      alert("입력 값을 확인해주세요.");
      return;
    }
    alert(
      `유효성 검사 통과! 로그인 제출 진행. 아이디:${user.userId},  비밀번호: ${user.userPwd}`
    );
  };

  return (
    <>
      <h2>종합예시 - 로그인 폼 </h2>
      <h4>(사용자 입력값을 각 개별 state 변수로 관리)</h4>
      <form action="/login" method="post" onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="아이디 입력"
          name="userId"
          value={user.userId}
          onChange={handleUserChange}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호 입력"
          name="userPwd"
          value={user.userPwd}
          onChange={handleUserChange}
        />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

export default Example5;
