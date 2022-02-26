import React from 'react';
import Header from './components/Header';
import AddInfo from './components/AddInfo';
import './styles/styles.css';

const App = () => {
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
};

export default App;
