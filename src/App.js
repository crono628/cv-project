import React, { Component } from 'react';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div className="border border-primary p-3">
        <Header />
        <GeneralInfo />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
