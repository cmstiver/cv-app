/* eslint-disable max-len */
import './stylesheets/style.scss';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import General from './components/Form/General';
import WorkExperience from './components/Form/WorkExperience';
import Education from './components/Form/Education';
import CV from './components/Resume/Resume';

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        name: '',
        website: '',
        email: '',
        phone: '',
        location: '',
        title: '',
        summary: '',
        skills: '',
      },
      experience: [
        {
          key: uniqid(),
          position: '',
          company: '',
          city: '',
          date: '',
          description: '',
        },
        {
          key: uniqid(),
          position: '',
          company: '',
          city: '',
          date: '',
          description: '',
        },
      ],
      education: [
        {
          school: '',
          city: '',
          degree: '',
          date: '',
        },
      ],
    };
  }

  onChangeHandlerGeneral = (e, section) => {
    this.setState((prevState) => ({
      [section]: {
        ...prevState[section],
        [e.target.name]: e.target.value,
      },
    }));
  };

  onChangeHandlerArrays = (e, section) => {
    this.setState((prevState) => ({
      [section]: prevState[section].map((x) => (x.key === e.target.parentNode.parentNode.id ? { ...x, [e.target.name]: e.target.value } : x)),
    }));
  };

  render() {
    return (
      <>
        <div id="form">
          <General state={this.state} onChangeHandler={this.onChangeHandlerGeneral} />
          <WorkExperience
            workExperience={this.state.experience}
            onChangeHandler={this.onChangeHandlerArrays}
          />
          <Education />
        </div>
        <CV state={this.state} />
      </>
    );
  }
}

export default App;
