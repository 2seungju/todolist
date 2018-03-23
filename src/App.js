import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';

import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 0, text: 'React Study', checked: true },
      { id: 1, text: 'CSS Study', checked: false },
      { id: 2, text: 'CSS Study', checked: false },
      { id: 3, text: 'CSS Study', checked: false },
      { id: 4, text: 'CSS Study', checked: false },
    ],
    keyword: '',
  }

  handleCreate = () => {
    const { todos, keyword } = this.state;
    const results = todos.concat({
      id: todos.length,
      text: keyword,
      checked: false,
    });

    this.setState({
      todos: results,
    });
    console.log(this.state.keyword);
    console.log(this.state.todos);
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos]; // 배열을 복사
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
    console.log(todos);
  }

  handleCheck = (id) => {
    const { todos } = this.state;
    const { checked } = todos.checked;

  }

  handleDelete = (id) => {
    const { todos } = this.state;
    const result = todos.splice()
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  render() {
    const { todos, keyword } = this.state;
    return (
      <div className="App">
        <h1>TodoList</h1>
        <TodoTemplate
          todos={todos}
          value={keyword}
          onChange={this.handleChange}
          onCreate={this.handleCreate}
          onDelete={this.handleDelete}
          onToggle={this.handleToggle}
        />
      </div>
    );
  }
}

export default App;
