import React from 'react';

import '../style/TodoCreator.css';

class TodoCreator extends React.Component {
  state = {
    selected: 'black',
  }

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
    });
    this.props.onColor(this.state.selected);
  }
  render() {
    const { value, onChange, onCreate, onEnter, color } = this.props;
    const { selected } = this.state;
    const { handleChange } = this;
    return (
      <div>
        <div className="creator-wrapper">
          <input value={value} onChange={onChange} onKeyPress={onEnter} style={{ color: selected }} />
          <div className="add" onClick={onCreate}>ADD</div>
        </div>
        <div className="radio">
          <input
            type="radio"
            id="1"
            value="black"
            checked={selected === 'black'}
            onChange={handleChange}
            onClick={() => console.log(selected)}
          />
          <input
            type="radio"
            id="2"
            value="red"
            checked={selected === 'red'}
            onChange={handleChange}
            onClick={() => console.log(selected)}
          />
          <input
            type="radio"
            id="3"
            value="yellow"
            checked={selected === 'yellow'}
            onChange={handleChange}
          />
          <input
            type="radio"
            id="4"
            value="pink"
            checked={selected === 'pink'}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default TodoCreator;
