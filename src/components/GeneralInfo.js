import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Name',
      email: 'Email',
      edit: false,
    };
    this.getInput = this.getInput.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  getInput = (e) => {
    e.preventDefault();
    this.setState({
      name: document.querySelector('#fullName').value,
      email: document.querySelector('#email').value,
      edit: false,
    });
  };

  setEdit = () => {
    this.setState({
      edit: true,
    });
  };

  render() {
    const { getInput, setEdit } = this;
    const { name, email, edit } = this.state;

    if (edit) {
      return (
        <div className="">
          <div className="row p-2">
            <form onSubmit={getInput} id="name">
              <input
                className="form-control form-control-lg"
                type="text"
                id="fullName"
                defaultValue={name}
              />
              <input
                className="form-control form-control-lg"
                type="text"
                id="email"
                defaultValue={email}
              />
              <input type="submit" className="btn btn-primary" />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="p-2 row" id="name" onClick={setEdit}>
          <p id="fullName">{name}</p>
          <p id="email">{email}</p>
        </div>
      );
    }
  }
}

export default GeneralInfo;
