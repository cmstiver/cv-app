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
          <p>Start Date: </p>
          <input id="work-start" />
        </div>
        <div>
          <p>End Date: </p>
          <input id="work-end" />
        </div>
      </div>
      <div className="add">
        <button type="button">Add Work Experience</button>
      </div>
    </div>
  );
}

export default WorkExperience;
