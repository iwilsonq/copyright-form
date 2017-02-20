import React from 'react';

const TextArea = props => {
  return (
    <div className="form-control">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        type={props.type}
        onChange={e => props.onChange(props.name, e.target.value)}
        ></textarea>
    </div>
  );
};

export default TextArea;
