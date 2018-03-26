import React from 'react';

class Palett extends React.Component {
  state = {
    selected: 'black',
  }

  shouldComponentUpdate(nextState) {
    console.log(nextState);
    return true;
  }

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
    });
    this.props.onColor(this.state.selected);
  }
  render() {
    const { selected } = this.state;
    const { handleChange } = this;
    console.log(selected);
    return (
      <div>
        <input
          type="radio"
          id="1"
          value="black"
          checked={selected === 'black'}
          onChange={handleChange}
        />
        <input
          type="radio"
          id="2"
          value="red"
          checked={selected === 'red'}
          onChange={handleChange}
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
    );
  }
}

export default Palett;
