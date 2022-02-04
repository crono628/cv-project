import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Full Name',
      edit: false,
    };
  }

  getInput = (e) => {
    e.preventDefault();
    this.setState({
      name: document.getElementById('name').value,
      edit: false,
    });
  };

  setEdit = () => {
    this.setState({
      edit: true,
    });
  };

  render() {
    const { name, edit } = this.state;
    const { getInput, setEdit } = this;

    if (edit) {
      return (
        <div className="p-1">
          <form onSubmit={getInput}>
            <input
              className="form-control form-control-lg"
              type="text"
              id="name"
              defaultValue={name}
            />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      );
    } else {
      return (
        <div onClick={setEdit} className="p-1">
          <h1 id="name">{name}</h1>
        </div>
      );
    }
  }
}

export default Header;
