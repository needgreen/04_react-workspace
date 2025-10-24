import React from "react";
import StudentItem from "./StudentItem";

function StudentList() {
  const students = [
    { id: 1, name: "김코딩", age: 22 },
    { id: 2, name: "윤룰루", age: 24 },
    { id: 3, name: "신랄라", age: 25 },
  ];

  return (
    <>
      <h2>학생 목록</h2>
      <div>
        {students.map((student) => (
          // 리스트 렌더링 시 고유한 key 값 설정 필요
          <StudentItem key={student.id} stu={student} />
        ))}
      </div>
    </>
  );
}

export default StudentList;
