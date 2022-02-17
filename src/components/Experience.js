import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './Overview';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        organization: '',
        position: '',
        dates: '',
        description: '',
        id: uniqid(),
      },
      edit: false,
      experiences: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      experience: {
        organization: '',
        position: '',
        dates: '',
        description: '',
        id: uniqid(),
      },
      edit: false,
      experiences: this.state.experiences.concat(this.state.experience),
    });
  };

  setEdit = () => this.setState({ edit: true });

  render() {
    const { organization, position, dates, description, id } =
      this.state.experience;

    const { experience, experiences } = this.state;

    const editing = (
      <div className="p-1">
        <form onSubmit={this.handleSubmit} id="experience">
          <input
            className="form-control"
            onChange={this.handleChange}
            type="text"
            id="organization"
            value={organization}
          />
          <input
            className="form-control"
            onChange={this.handleChange}
            type="text"
            id="position"
            value={position}
          />
          <input
            className="form-control"
            onChange={this.handleChange}
            type="text"
            id="dates"
            value={dates}
          />
          <input
            className="form-control"
            onChange={this.handleChange}
            type="text"
            id="description"
            value={description}
          />
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );

    const notEditing = () => (
      <div>
        <Overview key={id} array={experiences} />
      </div>
    );

    return (
      <div onClick={this.setEdit}>
        <h6>Experience:</h6>
        {this.state.edit ? editing : notEditing}
      </div>
    );
  }
}

export default Experience;
