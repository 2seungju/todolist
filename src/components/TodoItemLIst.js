import React, { Component } from 'react';

import '../style/TodoItemList.css';

class TodoItemList extends Component {
  render() {
    const { todos } = this.props;
    const list = todos.map(todo => (
      <div className="todo">
        {todo.text}
      </div>
    ));
    return (
      <div className="todos-wrapper">
        {list}
      </div>
    );
  };
  }


export default TodoItemList;
