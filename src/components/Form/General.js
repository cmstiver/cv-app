import React from 'react';

function General() {
  return (
    <div id="general" className="info-container">
      <div id="general-form" className="form">
        <div>
          <p>First Name: </p>
          <input id="firstname" />
        </div>
        <div>
          <p>Last Name: </p>
          <input id="lastname" />
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
          <textarea id="summary" />
        </div>
      </div>
    </div>
  );
}

export default General;
