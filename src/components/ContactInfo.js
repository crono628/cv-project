import React, { Component } from 'react';
import Input from './Input';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Input placeholder="telephone" id="telephone" />
        <Input placeholder="email" id="email" />
        <Input placeholder="website" id="website" />
      </div>
    );
  }
}

export default ContactInfo;
