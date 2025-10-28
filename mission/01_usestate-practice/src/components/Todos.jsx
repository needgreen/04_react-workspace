import React, { useState } from "react";

function Todos() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  // 할일 추가하기 => 배열로 생성
  const handleAddTodo = () => {
    // 문자열이 아닌 객체 형태로 추가 {text: 할일, completed: 완료 여부}
    setTodoList([...todoList, { text: inputValue, completed: false }]);

    // 입력창 비우기
    setInputValue("");
  };

  // 할 일 삭제하기 (배열의 특정 인덱스 항목 제거 새 배열로 반환)
  const handleDeleteTodo = (index) => {
    setTodoList(todoList.toSpliced(index, 1));
  };

  // 할 일 완료 표시
  const handleTodoComplete = (index) => {
    const newTodos = todoList.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(newTodos);
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
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleTodoComplete(index)}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          {/* 화살표 함수를 사용해서 즉시 실행되지 않도록 함 */}
          <button onClick={() => handleDeleteTodo(index)}>삭제</button>
        </p>
      ))}
    </>
  );
}

export default Todos;
