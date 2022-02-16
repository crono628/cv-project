import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      placeholder: this.props.placeholder,
      edit: false,
      id: this.props.id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: document.getElementById(`${this.props.id}`).value,
      edit: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      edit: true,
    });
  };

  setEdit = (e) => {
    this.setState({
      edit: true,
    });
  };

  render() {
    const { edit, value, placeholder, id } = this.state;
    const { type } = this.props;
    const { handleSubmit, setEdit, handleChange } = this;
    return (
      <>
        {value === '' ? (
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type={type}
              id={id}
              placeholder={placeholder}
            />
          </form>
        ) : value !== '' && !edit ? (
          <div id={id} onClick={setEdit}>
            {value}
          </div>
        ) : (
          edit && (
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                type={type}
                id={id}
                value={value}
              />
            </form>
          )
        )}
      </>
    );
  }
}

export default Input;
