import React from 'react';
import TodoCreator from './TodoCreator';
import TodoItemList from './TodoItemLIst';

import '../style/TodoTemplate.css';

const TodoTemplate = ({ todos, value, onChange, onCreate }) => {
  console.log(todos)
  return (
    <div className="template">
      <div className="creator">
        <TodoCreator
          value={value}
          onChange={onChange}
          onCreate={onCreate}
        />
      </div>
      <div className="itemlist">
        <TodoItemList
          todos={todos}
        />
      </div>
    </div>
  );
};

export default TodoTemplate;
