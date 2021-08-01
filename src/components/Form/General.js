import React from 'react';

function General() {
  return (
    <div id="general" className="info-container">
      <div id="general-form" className="form">
        <div>
          <p>Name: </p>
          <input id="name" />
        </div>
        <div>
          <p>Website (optional): </p>
          <input id="website" />
        </div>
        <div>
          <p>Email: </p>
          <input id="email" />
        </div>
        <div>
          <p>Phone #: </p>
          <input id="phone" />
        </div>
        <div>
          <p>Location: </p>
          <input id="location" />
        </div>
        <div>
          <p>Professional Title (optional): </p>
          <input id="title" />
        </div>
        <div>
          <p>Professional Summary (optional): </p>
          <textarea id="summary" className="textbox" />
        </div>
        <div>
          <p>Professional Skills (optional): </p>
          <textarea
            id="skills"
            className="textbox"
            placeholder="Format like this: Writing, Eating, Spinning Basketballs, Sampling Tap Water"
          />
        </div>
      </div>
    </div>
  );
}

export default General;
