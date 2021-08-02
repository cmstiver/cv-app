import React from 'react';

function General(props) {
  return (
    <div id="general" className="info-container">
      <div>
        <button type="button" id="build" onClick={props.buildExample}>
          Build Example
        </button>
        <button type="button" id="reset" onClick={props.reset} className="material-icons">
          restart_alt
        </button>
      </div>
      <div id="general-form" className="form">
        <div>
          <p>Name: </p>
          <input
            id="name"
            name="name"
            value={props.general.name}
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Website: </p>
          <input
            id="website"
            name="website"
            value={props.general.website}
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
            value={props.general.email}
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
            value={props.general.phone}
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
            value={props.general.location}
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Professional Title: </p>
          <input
            id="title"
            name="title"
            value={props.general.title}
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Professional Summary: </p>
          <textarea
            id="summary"
            className="textbox"
            name="summary"
            value={props.general.summary}
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
          />
        </div>
        <div>
          <p>Professional Skills: </p>
          <textarea
            id="skills"
            className="textbox"
            name="skills"
            value={props.general.skills}
            onChange={(e) => {
              props.onChangeHandler(e, 'general');
            }}
            placeholder={'Carrot Farming\nSiting in a Chair\nReactJS\nNot Talking'}
          />
        </div>
      </div>
    </div>
  );
}

export default General;
