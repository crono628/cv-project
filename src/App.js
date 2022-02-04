import React, { Component } from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import './styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page main-div border border-dark m-2 p-3 shadow-lg">
        <div className="header row">
          <Header />
          <hr style={{ color: 'black', height: 3 }} />
        </div>
        <div className="row row-cols-2">
          <div className="contact-info col-3">
            <ContactInfo />
          </div>
          <div className="main col-9">
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
