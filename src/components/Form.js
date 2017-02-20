import React, { Component } from 'react';
import Field from './Field';
import TextArea from './TextArea';
import Dropdown from './Dropdown';

const options = [
  { value: 'Myself' },
  { value: 'My company, organization, or client' },
  { value: 'Another copyright owner' }
];

class Form extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form action="http://localhost:4000/claims" method="post">
          <div className="row name-inputs">
            <Field name="firstName" label="First Name" type="text" />
            <Field name="lastName" label="Last Name" type="text" />
            <Field name="email" label="Email" type="email" />
          </div>

          <div className="row">
            <Dropdown
              name="whoAffected"
              label="Copyright Infringement - Who is Affected?"
              options={options}
            />
          </div>

          <div className="row">
            <TextArea name="courseLinks" label="Links to Courses Affected" type="text" />
          </div>

          <div className="row">
            <TextArea name="infringementLinks" label="Links to Infringements" type="text" />
          </div>

          <div className="row">
            <label htmlFor="confirm">
              <input type="checkbox" />
              I confirm that I am the copyright holder and/or creator of this course and have not provided permission for the given site(s) to offer my course.
            </label>
          </div>

          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
