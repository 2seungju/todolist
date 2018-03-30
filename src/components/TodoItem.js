import React from 'react';
import styled from 'styled-components';

import '../style/TodoItem.css';

const TodosWrapper = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const Todo = styled.div`
  line-height: 1rem;
  font-weight: 800;
  cursor: default;
  display: flex;
  font-size: 35px;
  border-bottom-style: dotted;
  padding: 5px;
  justify-content: space-between;

  @media (max-width:425px) {
    font-size: 1.5rem;
  }
  
  @media (min-width:1000px) and (max-width:1100px) {
    font-size: 4rem;
    padding-bottom: 5%;
  }
`;

// const TodoText = ({ color }) => {
//   return (
//     styled.div`
//     color: ${color}
//   `
//   );
// };
/* 해결 못함 */
const Delete = styled.span`
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 25px;
  justify-content: flex-end;
  margin-top: 10px;
  cursor: pointer;
`;

const CheckMark = styled.div`

`;

const TodoItem = ({
  id,
  text,
  checked,
  onToggle,
  onDelete,
  onCheck,
  color
}) => {
  console.log(id);
  return (
    <TodosWrapper>
      <Todo>
        {
          checked && (<CheckMark>✓</CheckMark>)
        }
        <div
          className={`todo-text-${color} ${checked && 'checked'}`}
          onClick={() => onCheck(id)}
        >
          {text}
        </div>
        <Delete onClick={() => onDelete(id)}>&times;</Delete>
      </Todo>
    </TodosWrapper>
  );
};

export default TodoItem;

/*
  1. 줄바꿈
        <div
          className={`todo-text ${checked && 'checked'}`}
          onClick={() => onCheck(id)}
          style={{ color: color }}
        >
          {text}
        </div>
    => complete

  2. className을 바꿔서 스타일을 적용하는 방법도 있습니다.
    예를 들면
    (1) style={{ color }} --> className={`todo-text-${color}`}
    (2) todoItem.css --> .todo-text-red { ... } .todo-text-blue { ... }  
*/
