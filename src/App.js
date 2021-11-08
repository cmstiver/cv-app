/* eslint-disable max-len */
import './stylesheets/style.scss';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import General from './components/Form/General';
import WorkExperience from './components/Form/WorkExperience';
import Education from './components/Form/Education';
import CVPrint from './components/Resume/ResumePrint';

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
      ],
      education: [
        {
          key: uniqid(),
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
      [section]: prevState[section].map((x) => (x.key === e.target.parentNode.parentNode.getAttribute('data-key')
        ? { ...x, [e.target.name]: e.target.value }
        : x)),
    }));
  };

  addWork = () => {
    this.setState((prevState) => ({
      experience: [
        ...prevState.experience,
        {
          key: uniqid(),
          position: '',
          company: '',
          city: '',
          date: '',
          description: '',
        },
      ],
    }));
  };

  addEdu = () => {
    this.setState((prevState) => ({
      education: [
        ...prevState.education,
        {
          key: uniqid(),
          school: '',
          city: '',
          degree: '',
          date: '',
        },
      ],
    }));
  };

  reset = () => {
    this.setState({
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
      ],
      education: [
        {
          key: uniqid(),
          school: '',
          city: '',
          degree: '',
          date: '',
        },
      ],
    });
  };

  buildExample = () => {
    this.setState({
      general: {
        name: 'CHAYSE STIVER',
        website: 'https://github.com/cmstiver',
        email: 'cmstiver@fakegmail.com',
        phone: '555-555-5555',
        location: 'Tacoma, WA',
        title: 'Web Developer',
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed commodo justo. Praesent nec dolor neque. Nam mattis ligula quis odio sollicitudin, sed vestibulum lectus egestas. Etiam nisi nisl, tincidunt sed dui et, efficitur fringilla felis. Aenean mauris turpis, accumsan vitae interdum eget, efficitur ut nisi. Fusce ac mi vel odio congue ultricies. Proin vitae turpis sit amet dolor viverra ullamcorper. Aliquam a quam aliquam, egestas metus aliquet, auctor lectus. Nullam id cursus sapien. Fusce rutrum eu erat id efficitur. Nam lacus diam, faucibus a ullamcorper ut, pharetra nec dui. Cras tincidunt, turpis nec semper laoreet, nisl nisl condimentum mauris, at pulvinar odio odio ut nisl.',
        skills: 'ReactJS\nJavascript\nCSS/HTML\nJest\nWebpack\nHazmat Technician Certified',
      },
      experience: [
        {
          key: uniqid(),
          position: 'Bioenvironmental Engineering Technician',
          company: 'U.S. AIR FORCE',
          city: 'San Angelo, TX',
          date: 'Feb 2017 - Feb 2021',
          description:
            'Performed and managed occupational and environmental health-related activities to include anticipating, recognizing, evaluating, and controlling exposure(s) to chemical, biological, and radiological hazards to meet compliance standards.',
        },
        {
          key: uniqid(),
          position: 'Ambulance Dispatcher',
          company: 'MEDIC ONE MEDICAL RESPONSE',
          city: 'Dallas, TX',
          date: 'May 2016 — Feb 2017',
          description:
            '- Answered emergency and non-emergency calls and documented important information in detail.\n- Used radio, phone, and computer to direct crews and other field units to appropriate sites.\n- Supervised the route and status of field units to prioritize daily schedules.\n- Maintained and updated call logs, call records, and other important documentation.',
        },
        {
          key: uniqid(),
          position: 'Crew Member',
          company: "WENDY'S",
          city: 'Ocean Springs, MS',
          date: 'Jul 2014 — May 2016',
          description:
            'Provided a level of customer service that exceeded expectations and swiftly prepared food made to order. ',
        },
      ],
      education: [
        {
          key: uniqid(),
          school: 'University of Washington',
          city: 'Tacoma, WA',
          degree: 'B.A. CS: In Progress',
          date: '2021 - Present',
        },
      ],
    });
  };

  render() {
    return (
      <>
        <div id="form">
          <General
            general={this.state.general}
            onChangeHandler={this.onChangeHandlerGeneral}
            reset={this.reset}
            buildExample={this.buildExample}
          />
          <WorkExperience
            experience={this.state.experience}
            onChangeHandler={this.onChangeHandlerArrays}
            addWork={this.addWork}
          />
          <Education
            education={this.state.education}
            onChangeHandler={this.onChangeHandlerArrays}
            addEdu={this.addEdu}
          />
        </div>
        <CVPrint state={this.state} />
      </>
    );
  }
}

export default App;
