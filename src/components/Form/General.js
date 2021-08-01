import React from 'react';

function General() {
  return (
    <div id="general">
      <div id="general-container">
        <span>First Name: </span>
        <input id="firstname" type="text" />
        <span>Last Name: </span>
        <input id="lastname" type="text" />
        <span>Email: </span>
        <input id="email" type="text" />
        <span>Phone #: </span>
        <input id="phone" type="text" />
        <span>Location: </span>
        <input id="location" type="text" />
        <span>Professional Title (optional): </span>
        <input id="title" type="text" />
        <span>Professional Summary (optional): </span>
        <input id="summary" type="text" />
      </div>
    </div>
  );
}

export default General;
