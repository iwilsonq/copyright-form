import React from 'react';

const TextArea = props => {
  return (
    <div className="form-control">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea type={props.type} rows="" cols=""></textarea>
    </div>
  );
};

export default TextArea;
