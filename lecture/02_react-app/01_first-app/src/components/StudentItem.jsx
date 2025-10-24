import React from "react";

function StudentItem({ stu }) {
  // props => {stu: {id:xx, name: xx, age: xx}}
  return (
    <p>
      이름: {stu.name} <br />
      나이: {stu.age} <br />
    </p>
  );
}

export default StudentItem;
