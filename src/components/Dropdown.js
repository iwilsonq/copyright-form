import React from 'react';

const Dropdown = props => {
  return (
    <div className="form-control">
      <label htmlFor={props.name}>{props.label}</label>
      <select
        name={props.name}
        onChange={e => props.onChange(props.name, e.target.value)}
      >
        {props.options.map(o => {
          return <option key={o.value} value={o.value}>{o.description}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
