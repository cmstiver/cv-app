import React from 'react';

function General() {
  return (
    <div id="general">
      <div id="general-form" className="form">
        <div>
          <p>First Name: </p>
          <input id="firstname" type="text" />
        </div>
        <div>
          <p>Last Name: </p>
          <input id="lastname" type="text" />
        </div>
        <div>
          <p>Email: </p>
          <input id="email" type="text" />
        </div>
        <div>
          <p>Phone #: </p>
          <input id="phone" type="text" />
        </div>
        <div>
          <p>Location: </p>
          <input id="location" type="text" />
        </div>
        <div>
          <p>Professional Title (optional): </p>
          <input id="title" type="text" />
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
