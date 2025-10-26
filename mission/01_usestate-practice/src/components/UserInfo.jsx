import React, { useState } from "react";

function UserInfo() {
  const [userProfile, setUserProfile] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
  });

  const handleInputChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const hasInput =
    userProfile.userName || userProfile.userAge || userProfile.userEmail;

  return (
    <>
      <label htmlFor="userName">
        이름:
        <input
          type="text"
          placeholder="이름 입력"
          id="userName"
          name="userName"
          value={userProfile.userName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="userAge">
        나이:
        <input
          type="number"
          placeholder="나이 입력"
          id="userAge"
          name="userAge"
          value={userProfile.userAge}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="useEmail">
        이메일:
        <input
          type="text"
          placeholder="이메일 입력"
          id="userEmail"
          name="userEmail"
          value={userProfile.userEmail}
          onChange={handleInputChange}
        />
      </label>

      <h4>프로필</h4>
      {hasInput && (
        <>
          <div>
            {userProfile.userName} ({userProfile.userAge}세)
          </div>
          <div> 📧 {userProfile.userEmail} </div>
        </>
      )}
    </>
  );
}

export default UserInfo;
