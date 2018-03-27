import React from 'react';

class Palett extends React.Component {
  state = {
    selected: 'black',
  }

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
    });
    this.props.onColor(e.target.value); // 부모 컴포넌트의 함수 호출
  }
  render() {
    const { selected } = this.state;
    const { handleChange } = this;
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
