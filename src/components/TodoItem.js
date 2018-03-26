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
  return (
    <div className="todos-wrapper">
      <div className="todo">
        {
          checked && (<div className="check-mark">✓</div>)
        }
        <div
          className={`todo-text ${checked && 'checked'}`}
          onClick={() => onCheck(id)}
          style={{ color: color }}
        >{text}
        </div>
        <span className="delete" onClick={() => onDelete(id)}>&times;</span>
      </div>
    </div>
  );
};

export default TodoItem;
