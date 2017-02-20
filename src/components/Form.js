import React, { Component } from 'react';
import Field from './Field';
import TextArea from './TextArea';
import Dropdown from './Dropdown';
import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://localhost:4000'
});

const options = [
  { description: 'Myself', value: 'self' },
  { description: 'My company, organization, or client', value: 'organization' },
  { description: 'Another copyright owner', value: 'other' }
];

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      whoAffected: 'self',
      courseLinks: [],
      infringementLinks: []
    };
  }

  onChange(field, text) {
    this.setState({ [field]: text });
  }

  onChangeList(field, list) {
    const links = list.split('\n').filter(link => link !== '');
    this.setState({ [field]: links });
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.refs.confirm.checked) {
      ax.post('/claims', this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="row name-inputs">
            <Field
              name="firstName"
              label="First Name"
              type="text"
              onChange={this.onChange.bind(this)}
            />
            <Field
              name="lastName"
              label="Last Name"
              type="text"
              onChange={this.onChange.bind(this)}
            />
            <Field
              name="email"
              label="Email" type="email"
              onChange={this.onChange.bind(this)}
             />
          </div>

          <div className="row">
            <Dropdown
              name="whoAffected"
              label="Copyright Infringement - Who is Affected?"
              options={options}
              onChange={this.onChange.bind(this)}
            />
          </div>

          <div className="row">
            <TextArea
              name="courseLinks"
              label="Links to Courses Affected"
              type="text"
              onChange={this.onChangeList.bind(this)}
            />
          </div>

          <div className="row">
            <TextArea
              name="infringementLinks"
              label="Links to Infringements"
              type="text"
              onChange={this.onChangeList.bind(this)}
            />
          </div>

          <div className="row">
            <label htmlFor="confirm">
              <input
                ref="confirm"
                type="checkbox"
              />
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
