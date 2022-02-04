import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: 'School',
      major: 'Major',
      dates: 'Dates',
      edit: false,
    };
    this.getInput = this.getInput.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  getInput = (e) => {
    e.preventDefault();
    this.setState({
      school: document.querySelector('#school').value,
      major: document.querySelector('#major').value,
      dates: document.querySelector('#date').value,
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
    const { school, major, dates, edit } = this.state;

    if (edit) {
      return (
        <div className="p-1">
          <form onSubmit={getInput} id="edu">
            <input
              type="text"
              id="school"
              className="form-control"
              defaultValue={school}
            />
            <input
              type="text"
              id="major"
              className="form-control"
              defaultValue={major}
            />
            <input
              type="text"
              id="date"
              className="form-control"
              defaultValue={dates}
            />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      );
    } else {
      return (
        <div className="p-1" onClick={setEdit}>
          <p id="school">{school}</p>
          <p id="major">{major}</p>
          <p id="date">{dates}</p>
        </div>
      );
    }
  }
}

export default Education;
