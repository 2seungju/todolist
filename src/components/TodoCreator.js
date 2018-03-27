import React from 'react';

import '../style/TodoCreator.css';

const TodoCreator = ({ value, onChange, onCreate, onEnter, color }) => {
  return (
    <div className="creator-wrapper">
      <input value={value} onChange={onChange} onKeyPress={onEnter} style={{ color: color }} />
      {/* props에 따라 색이 바뀜 */}
      <div className="add" onClick={onCreate}>ADD</div>
    </div>
  );
};

export default TodoCreator;
