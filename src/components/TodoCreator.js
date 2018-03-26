import React from 'react';

import '../style/TodoCreator.css';

class TodoCreator extends React.Component {
  state = {
    selected: ''
  }
  render() {
    const { value, onChange, onCreate, onEnter, color } = this.props;
    return (
      <div className="creator-wrapper">
        <input value={value} onChange={onChange} onKeyPress={onEnter} style={{ color: color }} />
        <div className="add" onClick={onCreate}>ADD</div>
      </div>
    );
  }
}

export default TodoCreator;
