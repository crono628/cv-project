import React, { Component } from 'react';

class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: 'Phone',
      email: 'Email',
      website: 'Website',
      edit: false,
    };
    this.getInput = this.getInput.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  getInput = (e) => {
    e.preventDefault();
    this.setState({
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      website: document.getElementById('website').value,
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
    const { phone, website, email, edit } = this.state;

    if (edit) {
      return (
        <div className=" p-1 text-wrap">
          <form onSubmit={getInput}>
            <input
              className="form-control form-control-sm"
              type="tel"
              id="phone"
              defaultValue={phone}
            />
            <input
              className="form-control form-control-sm"
              type="text"
              id="email"
              defaultValue={email}
            />
            <input
              className="form-control form-control-sm"
              type="text"
              id="website"
              defaultValue={website}
            />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      );
    } else {
      return (
        <div className="p-1 fw-lighter lh-1" onClick={setEdit}>
          <p id="phone">{phone}</p>
          <p id="email">{email}</p>
          <p id="website">{website}</p>
        </div>
      );
    }
  }
}

export default ContactInfo;
