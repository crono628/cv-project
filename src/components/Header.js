import React, { Component } from 'react';
import Input from './Input';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>
          <Input placeholder="Full Name" id="full-name" />
        </h1>
      </div>
    );
  }
}

export default Header;
