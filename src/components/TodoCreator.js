import React from 'react';

import '../style/TodoCreator.css';

const TodoCreator = ({ value, onChange, onCreate }) => {
  console.log(onCreate);
  return (
    <div className="creator-wrapper">
      <input value={value} onChange={onChange} />
      <div className="add" onClick={onCreate}>ADD</div>
    </div>
  );
};

export default TodoCreator;
