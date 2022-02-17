import React, { Component } from 'react';
import AddInfo from './components/AddInfo';
import Header from './components/Header';
import './styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  addContact = () => {};

  render() {
    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <div className="side">
            <div className="contact-info">
              <div>
                Contact Info:
                <AddInfo />
              </div>
            </div>
            <div className="skills">
              <div>
                Skills:
                <AddInfo />
              </div>
            </div>
          </div>
          <div className="main">
            <div>
              <div className="experience">
                Experience:
                <AddInfo />
              </div>
            </div>
            <div>
              <div className="education">
                Education:
                <AddInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
