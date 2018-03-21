import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';

import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 0, text: 'React Study', checked: true },
      { id: 1, text: 'CSS Study', checked: false },
      { id: 1, text: 'CSS Study', checked: false },
      { id: 1, text: 'CSS Study', checked: false },
      { id: 1, text: 'CSS Study', checked: false },
      { id: 1, text: 'CSS Study', checked: false },
      { id: 1, text: 'CSS Study', checked: false },
      { id: 1, text: 'CSS Study', checked: false },
      { id: 1, text: 'CSS Study', checked: false },
    ],
  }

  handleCreate = () => {

  }

  handleToggle = () => {

  }

  handleDelete = () => {

  }

  render() {
    console.log(this.state.todos);
    const { todos } = this.state
    return (
      <div className="App">
        <h1>TodoList</h1>
        <TodoTemplate
          todos={todos}
        />
      </div>
    );
  }
}

export default App;
