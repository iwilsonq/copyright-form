import React from 'react';

const Dropdown = props => {
  return (
    <div className="form-control">
      <label htmlFor={props.name}>{props.label}</label>
      <select name={props.name}>
        {props.options.map(o => {
          return <option key={o.value} value={o.value}>{o.value}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
