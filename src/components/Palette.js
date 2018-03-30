import React from 'react';
import styled from 'styled-components';
// import '../style/Palette.css';

const PaletteWrapper = styled.div`
  background: rgb(143, 163, 180);
  border-radius: 5px;
  @media (max-width:425px) {
    margin-top: 0;
  }
  
  @media (height:1024px) {
    margin-top: 0;
  }
`;

const Input = styled.input`
  margin-right: 3%;
`;

class Palette extends React.Component {
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
      <PaletteWrapper>
        <Input
          type="radio"
          id="1"
          value="black"
          checked={selected === 'black'}
          onChange={handleChange}
        />
        <Input
          type="radio"
          id="2"
          value="red"
          checked={selected === 'red'}
          onChange={handleChange}
        />
        <Input
          type="radio"
          id="3"
          value="yellow"
          checked={selected === 'yellow'}
          onChange={handleChange}
        />
        <Input
          type="radio"
          id="4"
          value="pink"
          checked={selected === 'pink'}
          onChange={handleChange}
        />
      </PaletteWrapper>
    );
  }
}

export default Palette;
