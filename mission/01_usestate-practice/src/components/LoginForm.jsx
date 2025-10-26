import React, { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState({
    userId: "",
    userPwd: "",
  });
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleUserChange = (e) => {
    setUser({
      ...user,
      // 식별자(예: name)로 구분, 프로퍼티 []로 묶어주기
      [e.target.name]: e.target.value, // 이벤트가 발생된 입력상자의 입력 값만 덮어쓰기
    });
  };

  const handleCheckboxChange = (e) => {
    setKeepLoggedIn(e.target.checked);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!user.userId.trim() || !user.userPwd.trim()) {
      alert("입력 값을 확인해주세요.");
      return;
    }
    alert(
      `로그인 시도!  사용자 :${user.userId}  기억하기: ${
        keepLoggedIn ? "예" : "아니오"
      }`
    );
  };

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
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
        <input
          type="checkbox"
          id="chk"
          checked={keepLoggedIn}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="chk">로그인 상태 유지</label>
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

export default LoginForm;
