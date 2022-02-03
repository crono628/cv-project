import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organization: 'Organization',
      position: 'Position',
      dates: 'Dates',
      description: 'Description',
      edit: false,
    };
    this.getInput = this.getInput.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  getInput = (e) => {
    e.preventDefault();
    this.setState({
      organization: document.querySelector('#organization').value,
      position: document.querySelector('#position').value,
      dates: document.querySelector('#dates').value,
      description: document.querySelector('#description').value,
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
    const { organization, position, dates, description, edit } = this.state;

    if (edit) {
      return (
        <div>
          <div className="p-2">
            <form onSubmit={getInput} id="exp">
              <input
                type="text"
                id="organization"
                className="form-control form-control-lg"
                defaultValue={organization}
              />
              <input
                type="text"
                id="position"
                className="form-control form-control-lg"
                defaultValue={position}
              />
              <input
                type="text"
                id="dates"
                className="form-control form-control-lg"
                defaultValue={dates}
              />
              <input
                type="text"
                id="description"
                className="form-control form-control-lg"
                defaultValue={description}
              />
              <input type="submit" class="btn btn-primary" />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="p-2" onClick={setEdit} id="exp">
            <p id="organization">{organization}</p>
            <p id="position">{position}</p>
            <p id="dates">{dates}</p>
            <p id="description">{description}</p>
          </div>
        </div>
      );
    }
  }
}

export default Experience;
