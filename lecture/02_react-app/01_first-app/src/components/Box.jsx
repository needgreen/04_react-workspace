function Box() {
  //이벤트 핸들러 함수 정의
  const handleMouseOver = () => {
    console.log("마우스가 들어옴");
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={() => console.log("마우스가 나갔음")}
    >
      마우스를 올려보세요.
    </div>
  );
}

export default Box;
