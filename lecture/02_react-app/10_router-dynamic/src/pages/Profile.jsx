import React from "react";
import { useParams } from "react-router-dom";

// 특정 사용자의 프로필 페이지 => /profile/사용자식별자
function Profile() {
  const { uid } = useParams(); // 객체 구조 => {uid => "1"} || {uid: "2"} 문자열로 취급

  return (
    <div>
      <h3>Profile 페이지</h3>
      <p>현재 페이지는 {uid}번 회원번호의 사용자 프로필 페이지입니다.</p>
    </div>
  );
}

export default Profile;
