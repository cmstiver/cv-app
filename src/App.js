import './stylesheets/style.scss';
import React, { Component } from 'react';
import General from './components/Form/General';
import WorkExperience from './components/Form/WorkExperience';
import Education from './components/Form/Education';
import Resume from './components/Resume/Resume';

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: [],
      work: [],
      education: [],
    };
  }

  render() {
    return (
      <div>
        <div id="form">
          <General />
          <WorkExperience />
          <Education />
        </div>
        <div id="resume">
          <Resume />
        </div>
      </div>
    );
  }
}

export default App;
