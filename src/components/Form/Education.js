import React from 'react';

function Education() {
  return (
    <div id="work-experience" className="info-container">
      <div id="work-form" className="form">
        <div>
          <p>School: </p>
          <input id="school" />
        </div>
        <div>
          <p>City: </p>
          <input id="school-city" />
        </div>
        <div>
          <p>Degree: </p>
          <input id="degree" />
        </div>
        <div>
          <p>Date: </p>
          <input id="school-date" />
        </div>
      </div>
      <div className="add">
        <button type="button">Add School</button>
      </div>
    </div>
  );
}

export default Education;
