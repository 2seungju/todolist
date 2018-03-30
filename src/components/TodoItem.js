import React from 'react';

import '../style/TodoItem.css';

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
    <div className="todos-wrapper">
      <div className="todo">
        {
          checked && (<div className="check-mark">✓</div>)
        }
        <div
          className={`todo-text-${color} ${checked && 'checked'}`}
          onClick={() => onCheck(id)}
        >
          {text}
        </div>
        <span className="delete" onClick={() => onDelete(id)}>&times;</span>
      </div>
    </div>
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
