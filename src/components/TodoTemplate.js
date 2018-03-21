import React from 'react';
import TodoCreator from './TodoCreator';
import TodoItemList from './TodoItemLIst';

import '../style/TodoTemplate.css';

const TodoTemplate = ({ todos }) => (
  <div className="template">
    <div className="creator">
      <TodoCreator />
    </div>
    <div className="itemlist">
      <TodoItemList
        todos={todos}
      />
    </div>
  </div>
);

export default TodoTemplate;
