import React from 'react';

const Field = props => {
  return (
    <div className="form-control">
      <label htmlFor={props.name}>{props.label}</label>
      <input name={props.name} type={props.type} />
    </div>
  );
};

export default Field;
