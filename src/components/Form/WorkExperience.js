import React from 'react';

function WorkExperience(props) {
  return (
    <div id="work-experience" className="info-container">
      <div id="work-form">
        {props.experience.map((workplace) => (
          <div key={workplace.key} data-key={workplace.key} className="form">
            <div>
              <p>Position: </p>
              <input
                className="position"
                name="position"
                value={workplace.position}
                onChange={(e) => {
                  props.onChangeHandler(e, 'experience');
                }}
              />
            </div>
            <div>
              <p>Company: </p>
              <input
                className="company"
                name="company"
                value={workplace.company}
                onChange={(e) => {
                  props.onChangeHandler(e, 'experience');
                }}
              />
            </div>
            <div>
              <p>City: </p>
              <input
                className="work-city"
                name="city"
                value={workplace.city}
                onChange={(e) => {
                  props.onChangeHandler(e, 'experience');
                }}
              />
            </div>
            <div>
              <p>Date: </p>
              <input
                className="work-date"
                name="date"
                value={workplace.date}
                onChange={(e) => {
                  props.onChangeHandler(e, 'experience');
                }}
              />
            </div>
            <div>
              <p>Description: </p>
              <textarea
                className="work-description textbox"
                name="description"
                value={workplace.description}
                onChange={(e) => {
                  props.onChangeHandler(e, 'experience');
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="add">
        <button type="button" onClick={props.addWork} className="material-icons">
          add_circle_outline
        </button>
      </div>
    </div>
  );
}

export default WorkExperience;
