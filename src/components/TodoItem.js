import React from 'react';

import '../style/TodoItem.css';

const handleClick = (id) => {
  console.log(id);
};

const TodoItem = ({ id, text, checked, onToggle, onDelete }) => {
  return (
    <div className="todos-wrapper" onClick={() => onToggle(id)}>
      <div className="todo">
        {
          checked && (<div className="check-mark">✓</div>)
        }
        <div className={`todo-text ${checked && 'checked'}`} onClick={handleClick(id)}>{text}</div>
        <span className="delete">&times;</span>
      </div>
    </div>
  );
};

export default TodoItem;
