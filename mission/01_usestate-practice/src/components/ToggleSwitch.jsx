import React, { useState } from "react";

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="check">
        콘텐츠 표시 : <span>{isChecked ? "켜짐" : "꺼짐"} </span>
      </label>
      <br />
      <input
        type="checkbox"
        id="mode"
        checked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
      />
      <label htmlFor="mode">
        다크모드 : <span>{isDarkMode ? "🌙" : "☀️"} </span>
      </label>

      <p> {isChecked ? "🎉 이 메세지는 조건부로 표시됩니다." : ""}</p>
    </>
  );
}

export default ToggleSwitch;
