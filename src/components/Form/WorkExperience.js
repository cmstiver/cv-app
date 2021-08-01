import React from 'react';

function WorkExperience() {
  return (
    <div id="work-experience" className="info-container">
      <div id="work-form" className="form">
        <div>
          <p>Position: </p>
          <input id="position" />
        </div>
        <div>
          <p>Company: </p>
          <input id="company" />
        </div>
        <div>
          <p>City: </p>
          <input id="work-city" />
        </div>
        <div>
          <p>Date: </p>
          <input id="work-date" />
        </div>
        <div>
          <p>Description (optional): </p>
          <textarea id="work-description" className="textbox" />
        </div>
      </div>
      <div className="add">
        <button type="button">Add Work Experience</button>
      </div>
    </div>
  );
}

export default WorkExperience;
