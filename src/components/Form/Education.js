import React from 'react';

function Education(props) {
  return (
    <div id="work-experience" className="info-container">
      <div id="work-form">
        {props.education.map((edu) => (
          <div key={edu.key} data-key={edu.key} className="form">
            <div>
              <p>School: </p>
              <input
                className="school"
                name="school"
                value={edu.school}
                onChange={(e) => {
                  props.onChangeHandler(e, 'education');
                }}
              />
            </div>
            <div>
              <p>City: </p>
              <input
                className="school-city"
                name="city"
                value={edu.city}
                onChange={(e) => {
                  props.onChangeHandler(e, 'education');
                }}
              />
            </div>
            <div>
              <p>Degree: </p>
              <input
                className="degree"
                name="degree"
                value={edu.degree}
                onChange={(e) => {
                  props.onChangeHandler(e, 'education');
                }}
              />
            </div>
            <div>
              <p>Date: </p>
              <input
                className="school-date"
                name="date"
                value={edu.date}
                onChange={(e) => {
                  props.onChangeHandler(e, 'education');
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="add">
        <button type="button" id="add-edu" onClick={props.addEdu} className="material-icons">
          add_circle_outline
        </button>
      </div>
    </div>
  );
}

export default Education;
