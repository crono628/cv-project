import React, { Component } from 'react';
import Input from './Input';
import uniqid from 'uniqid';

class AddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: [],
    };
  }

  addInfo = () => {
    this.setState({
      information: [
        ...this.state.information,
        <Input placeholder="Info" id={uniqid()} key={uniqid()} />,
      ],
    });
  };

  deleteInfo = () => {
    if ([...this.state.information].length > 0) {
      let array = [...this.state.information];
      let index = array.length - 1;
      array.splice(index, 1);
      this.setState({
        information: array,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.information}
        <button onClick={this.addInfo}>Add</button>
        <button onClick={this.deleteInfo}>Delete</button>
      </div>
    );
  }
}

export default AddInfo;
