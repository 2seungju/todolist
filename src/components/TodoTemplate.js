import React from 'react';
import styled from 'styled-components';

import TodoCreator from './TodoCreator';
import TodoItemList from './TodoItemLIst';
import Palette from './Palette';

import '../style/TodoTemplate.css';

const Template = styled.div`
  display: table;
  padding-bottom: 20px;
  margin: 0 auto;
  margin-top: 4rem;
  width: 40rem;
  height: 47rem;
  background: aliceblue;
  border-radius: 20px;

  @media (max-width:425px) {
    margin-top: 5%;
    width: 90%;
    height: 100%;
    padding-bottom: 15%;
  }
  
  @media (min-width:1000px) and (max-width:1100px) {
    margin-top: 12%;
    width: 90%;
    height: 100%;
    padding-bottom: 15%;
  }
`;

const Creator = styled.div`
  order-radius: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 5rem;
  background: rgb(143, 163, 180);
`;

const ItemList = styled.div`
margin-top: 6%;
`;

const TodoTemplate = ({ // 템플릿
  todos,
  value,
  onChange,
  onCreate,
  onDelete,
  onToggle,
  onEnter,
  onCheck,
  colors,
  onColor,
  color,
}) => {
  return (
    <Template>
      <Creator>
        <TodoCreator
          value={value}
          onChange={onChange}
          onCreate={onCreate}
          onEnter={onEnter}
          color={color}
          colors={colors}
          onColor={onColor}
        />
        <Palette
          onColor={onColor}
        />
      </Creator>
      <ItemList>
        <TodoItemList
          todos={todos}
          onDelete={onDelete}
          onToggle={onToggle}
          onCheck={onCheck}
          color={color}
        />
      </ItemList>
    </Template>
  );
};

export default TodoTemplate;
