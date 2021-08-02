import React from 'react';

function WorkExperience(props) {
  return (
    <div id="work-experience" className="info-container">
      <div id="work-form">
        {props.workExperience.map((workplace) => (
          <div id={workplace.key} key={workplace.key} className="form">
            <div>
              <p>Position: </p>
              <input
                className="position"
                name="position"
                onChange={(e) => {
                  props.onChangeHandler(e, 'experience');
                }}
              />
            </div>
            <div>
              <p>Company: </p>
              <input className="company" />
            </div>
            <div>
              <p>City: </p>
              <input className="work-city" />
            </div>
            <div>
              <p>Date: </p>
              <input className="work-date" />
            </div>
            <div>
              <p>Description (optional): </p>
              <textarea className="work-description textbox" />
            </div>
          </div>
        ))}
      </div>
      <div className="add">
        <button type="button">Add Work Experience</button>
      </div>
    </div>
  );
}

export default WorkExperience;
