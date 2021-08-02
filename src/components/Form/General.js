import React from 'react';

function General(props) {
  return (
    <div id="general" className="info-container">
      <div id="general-form" className="form">
        <div>
          <p>Name: </p>
          <input
            id="name"
            name="name"
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Website (optional): </p>
          <input
            id="website"
            name="website"
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Email: </p>
          <input
            id="email"
            name="email"
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Phone #: </p>
          <input
            id="phone"
            name="phone"
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Location: </p>
          <input
            id="location"
            name="location"
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Professional Title (optional): </p>
          <input
            id="title"
            name="title"
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Professional Summary (optional): </p>
          <textarea
            id="summary"
            className="textbox"
            name="summary"
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Professional Skills (optional): </p>
          <textarea
            id="skills"
            className="textbox"
            name="skills"
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
            placeholder="Format like this (use commas): Writing, Eating, Spinning Basketballs, Sampling Tap Water"
          />
        </div>
      </div>
    </div>
  );
}

export default General;
