import React, { useState } from "react";

const SaveHabit = ({
  id,
  name: defaultName = "",
  type: defaultType = "",
  frequency: defaultFrequency = "",
  saveHabit,
  deleteHabit,
  goBack
}) => {
  const [name, setName] = useState(defaultName);
  const [type, setType] = useState(defaultType);
  const [frequency, setFrequency] = useState(defaultFrequency);

  const saveAndClose = () => {
    saveHabit(id, name, type, frequency);
    goBack();
  };

  const deleteHabitAndClose = () => {
    deleteHabit(id);
    goBack();
  };

  return (
    <div className="mobile-size-container">
      <h2>Nice, what will it be?</h2>
      <div className="mb-3">
        <label htmlFor="new-habit-name">Name</label>
        <input
          id="new-habit-name"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="new-habit-type">Type</label>
        <select
          id="new-habit-type"
          className="form-control"
          value={type}
          onChange={e => setType(e.target.value)}
          onBlur={e => setType(e.target.value)}
        >
          <option value=""></option>
          <option value="Health">Health</option>
          <option value="Social">Social</option>
          <option value="Career">Career</option>
          <option value="Hobbies">Hobbies</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="new-habit-frequency">Frequency</label>
        <select
          id="new-habit-frequency"
          className="form-control"
          value={frequency}
          onChange={e => setFrequency(e.target.value)}
          onBlur={e => setFrequency(e.target.value)}
        >
          <option value=""></option>
          <option value="1">1x</option>
          <option value="2">2x</option>
          <option value="3">3x</option>
          <option value="4">4x</option>
          <option value="5">5x</option>
          <option value="6">6x</option>
          <option value="7">7x</option>
        </select>
      </div>
      <hr className="mb-4" />
      <button
        className="btn btn-primary btn-lg btn-block"
        onClick={saveAndClose}
      >
        Let's start!
      </button>
      {id ? (
        <button
          className="btn btn-danger btn-lg btn-block"
          onClick={deleteHabitAndClose}
        >
          Let's scrap this!
        </button>
      ) : null}
      <button className="btn btn-secondary btn-lg btn-block" onClick={goBack}>
        Maybe tomorrow...
      </button>
    </div>
  );
};

export default SaveHabit;
