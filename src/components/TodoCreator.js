import React from 'react';

import styled from 'styled-components';
// import '../style/TodoCreator.css';

const CreatorWrapper = styled.div`
  margin: auto;
  display: flex;
  
  @media (min-width: 1000px) and (max-width: 1100px) {
    margin-bottom: -2%;
  }
`;

const Input = styled.input`
  height: 40px;
  width: 30rem;
  margin-left: 7%;
  margin-top: 16px;
  background: rgb(143, 163, 180);
  border-style: hidden hidden solid hidden;
  border-color: black;
  outline: none;

  @media (max-width: 425px) {
    height: 100;
    width: 100%;
    margin-left: 7%;
    margin-top: 16px;
    background: rgb(143, 163, 180);
    border-style: hidden hidden solid hidden; /* border: 1px solid blue // border-style: solid */
    border-color: black;
    outline: none;
  }
  
  @media (min-width: 1000px) and (max-width:1100px) {
    width: 100%;
    margin-left: 5%;
    margin-top: 1%;
    background: rgb(143, 163, 180);
    border-style: hidden hidden solid hidden; /* border: 1px solid blue // border-style: solid */
    border-color: black;
    outline: none;
  }
`;

const Add = styled.div`
  font-size: 30px;
  margin-left: 17px;
  margin-top: 16px;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width:425px) {
    font-size: 1.5rem;
    margin-right: 10px;
  }
  
  @media (min-width:1000px) and (max-width:1100px) {
    font-size: 2rem;
    margin-right: 10px;
  }
  :hover{
    background: steelblue;
  }
`;

const TodoCreator = ({ value, onChange, onCreate, onEnter, color }) => {
  return (
    <CreatorWrapper>
      <Input value={value} onChange={onChange} onKeyPress={onEnter} style={{ color: color }} />
      {/* props에 따라 색이 바뀜 */}
      <Add onClick={onCreate}>ADD</Add>
    </CreatorWrapper>
  );
};

export default TodoCreator;
