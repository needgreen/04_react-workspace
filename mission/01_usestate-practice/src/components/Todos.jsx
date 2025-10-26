import React, { useState } from "react";

function Todos() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  // 할일 추가하기 => 배열로 생성
  const handleAddTodo = () => {
    setTodoList([...todoList, inputValue]);
    // 입력창 비우기
    setInputValue("");
  };

  // 할 일 삭제하기 (배열의 특정 인덱스 항목 제거 새 배열로 반환)
  const handleDeleteTodo = (index) => {
    setTodoList(todoList.toSpliced(index, 1));
  };

  return (
    <>
      <input
        type="text"
        placeholder="새 할일"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>추가</button>

      {todoList.map((todo, index) => (
        <p key={index}>
          <input type="checkbox" /> <span>{todo}</span>
          {/* 화살표 함수를 사용해서 즉시 실행되지 않도록 함 */}
          <button onClick={() => handleDeleteTodo(index)}>삭제</button>
        </p>
      ))}
    </>
  );
}

export default Todos;
