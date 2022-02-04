import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './Overview';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: {
        organization: 'Organization',
        position: 'Position',
        dates: 'Dates',
        description: 'Description',
        id: uniqid(),
      },
      experiences: [],
      edit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitEntry = this.onSubmitEntry.bind(this);
  }

  handleChange = () => {
    this.setState({
      experience: {
        organization: document.querySelector('#organization').value,
        position: document.querySelector('#position').value,
        dates: document.querySelector('#dates').value,
        description: document.querySelector('#description').value,
        id: this.state.experience.id,
      },
    });
  };

  onSubmitEntry = (e) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      edit: false,
    });
  };

  setEdit = () => {
    this.setState({
      edit: true,
    });
  };

  render() {
    const { handleChange, onSubmitEntry, setEdit } = this;
    const { edit, experiences } = this.state;
    const { organization, position, dates, description } =
      this.state.experience;

    if (edit) {
      return (
        <div className="p-1">
          <form onSubmit={onSubmitEntry} id="exp">
            <input
              onChange={handleChange}
              type="text"
              id="organization"
              className="form-control"
              defaultValue={organization}
            />
            <input
              onChange={handleChange}
              type="text"
              id="position"
              className="form-control"
              defaultValue={position}
            />
            <input
              onChange={handleChange}
              type="text"
              id="dates"
              className="form-control"
              defaultValue={dates}
            />
            <input
              onChange={handleChange}
              type="text"
              id="description"
              className="form-control"
              defaultValue={description}
            />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div className="p-1" onClick={setEdit} id="exp">
            <p id="organization">{organization}</p>
            <p id="position">{position}</p>
            <p id="dates">{dates}</p>
            <p id="description">{description}</p>
          </div>
          <Overview array={experiences} />
        </div>
      );
    }
  }
}

export default Experience;
