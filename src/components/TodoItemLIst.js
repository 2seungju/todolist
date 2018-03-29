import React, { Component } from 'react';

import TodoItem from './TodoItem';

import '../style/TodoItemList.css';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const {
      todos,
      onToggle,
      onDelete,
      onCheck,
    } = this.props;
    const list = todos.map(({
      id,
      text,
      checked,
      color,
    }) => {
      return (
        <TodoItem
          id={id}
          key={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onDelete={onDelete}
          onCheck={onCheck}
          color={color}
        />
      );
    });
    return (
      <div className="todos-wrapper">
        {list}
      </div>
    );
  }
}

export default TodoItemList;

/*
  가독성을 위해 이렇게 쓰는 방법도 있습니다.

  return (
    <div className="todow-wrapper">
      {todos.map(({ id, ... }) => <TodoItem ... /> )}
    </div>
  )
*/
