import React, { Component } from 'react';
import uniqid from 'uniqid';
import ContactInfo from './components/ContactInfo';
import Header from './components/Header';
import Input from './components/Input';
import './styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <hr />
        <ContactInfo />
      </div>
    );
  }
}

export default App;
