import React from 'react';

function CV(props) {
  const { general } = props.state;
  const { experience } = props.state;
  const { education } = props.state;
  return (
    <div id="cv">
      <div id="cv-paper">
        <div id="cv-top">
          <div id="cv-name">{general.name}</div>
          <div id="cv-title">{general.title}</div>
        </div>
        <div id="cv-side-main">
          <div id="cv-side">
            <div id="cv-contact" className="side-section">
              <div id="cv-phone">
                {general.phone}
                <span className="material-icons">call</span>
              </div>

              <div id="cv-email">
                {general.email}
                <span className="material-icons">email</span>
              </div>

              <div id="cv-city">
                {general.location}
                <span className="material-icons">location_on</span>
              </div>

              <div id="cv-website">
                {general.website}
                <span className="material-icons">share</span>
              </div>
            </div>
            <div id="cv-education" className="side-section">
              <p className="header">EDUCATION</p>
              <div className="cv-edu-list">
                {education.map((edu) => (
                  <div className="edu-group" key={edu.key}>
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-school">{edu.school}</div>
                    <div className="edu-city">{edu.city}</div>
                    <div className="edu-date">{edu.date}</div>
                  </div>
                ))}
              </div>
            </div>
            <div id="cv-skills" className="side-section">
              <p className="header">SKILLS</p>
              <div id="skills-list">{general.skills}</div>
            </div>
          </div>
          <div id="cv-main">
            <p className="header">PROFESSIONAL SUMMARY</p>
            <div id="cv-summary">{general.summary}</div>
            <p className="header">EXPERIENCE</p>
            <div id="cv-work-list">
              {experience.map((workplace) => (
                <div className="work-group" key={workplace.key}>
                  <div className="cv-work-title">
                    {`${workplace.company} `}
                    |
                    {` ${workplace.city} `}
                    |
                    {` ${workplace.date}`}
                  </div>
                  <div className="cv-work-position">{workplace.position}</div>
                  <div className="cv-work-description">{workplace.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
