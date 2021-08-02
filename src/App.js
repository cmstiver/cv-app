import './stylesheets/style.scss';
import React, { Component } from 'react';
import General from './components/Form/General';
import WorkExperience from './components/Form/WorkExperience';
import Education from './components/Form/Education';
import CV from './components/Resume/Resume';

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {},
    };
  }

  render() {
    return (
      <>
        <div id="form">
          <General state={this.state} onChangeHandler={this.onChangeHandler} />
          <WorkExperience />
          <Education />
        </div>
        <CV state={this.state} />
      </>
    );
  }
}

export default App;
