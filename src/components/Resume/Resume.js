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
                <div className="edu-group">
                  <div className="edu-degree">B.A. Computer Science</div>
                  <div className="edu-school">University of Washington</div>
                  <div className="edu-city">Tacoma, WA</div>
                  <div className="edu-date">2021 - 2025</div>
                </div>
                <div className="edu-group">
                  <div className="edu-degree">B.A. Computer Science</div>
                  <div className="edu-school">University of Washington</div>
                  <div className="edu-city">Tacoma, WA</div>
                  <div className="edu-date">2021 - 2025</div>
                </div>
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
              <div className="work-group">
                <div className="cv-work-title">U.S. AIR FORCE | San Angelo, TX | 2017 - 2021</div>
                <div className="cv-work-position">{experience[0].position}</div>
                <div className="cv-work-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus eros nunc,
                  et finibus metus mollis ut. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Sed euismod consequat rutrum. Donec
                  sit amet eros sem. Maecenas fermentum tincidunt erat, eget imperdiet ante tempus
                  vel. Ut ultricies sollicitudin urna ac dapibus. Nam eget diam viverra nulla
                  blandit efficitur sit amet sit amet ex.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
