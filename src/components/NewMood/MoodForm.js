import React, { useState } from "react";

import "./MoodForm.css";

const MoodForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const moodData = {
      title: enteredTitle,
      body: enteredBody,
      date: new Date(enteredDate),
    };

    props.onSaveMoodData(moodData);
    setEnteredTitle("");
    setEnteredBody("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-mood__controls">
        <div className="new-mood__control">
          <label>How do you feel today?</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>


        <div className="new-mood__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-mood__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Mood</button>
      </div>
    </form>
  );
};

export default MoodForm;
