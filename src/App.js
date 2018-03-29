import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';

import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 0, text: 'React Study', checked: true, color: 'black' },
      { id: 1, text: 'CSS Study1', checked: false, color: 'black' },
      { id: 2, text: 'CSS Study2', checked: false, color: 'black' },
      { id: 3, text: 'CSS Study3', checked: false, color: 'black' },
      { id: 4, text: 'CSS Study4', checked: false, color: 'red' },
    ],
    keyword: '',
    index: -1,
    colors: ['black', 'red', 'yellow', 'pink'],
    selected_color: 'black',
  }

  handleCreate = () => { // 할일 생성
    const { todos, keyword } = this.state;
    if (keyword !== '') {
      const results = todos.concat({
        id: todos.length,
        text: keyword,
        checked: false,
        color: this.state.selected_color,
      });
      this.setState({
        todos: results,
      });
      /*
      setstate를 두번으로 나눠서 한 이유는??
      this.setState({
        todos: results,
        keyword: '',
      })
      */

      this.setState({
        keyword: '',
      });
    }
  }



  handleColor = (color) => { // color state func
    this.setState({
      selected_color: color,
    });
  }

  handleKeyPress = (e) => { // enter func
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    this.setState({
      index: index,
    });
  }

  handleCheck = (id) => { // check func
    this.handleToggle(id);
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    console.log(id);
    const nextTodos = [...todos]; // 배열을 복사
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
      index: index,
    });
  }

  handleDelete = (id) => { // delete
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
    });
  }

  handleChange = (e) => { // onChagne event
    this.setState({
      keyword: e.target.value,
    });
  }

  render() {
    const {
      todos,
      keyword,
      colors,
      selected_color,
    } = this.state;
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
          onEnter={this.handleKeyPress}
          onCheck={this.handleCheck}
          colors={colors}
          onColor={this.handleColor}
          color={selected_color}
        />
      </div>
    );
  }
}

export default App;
