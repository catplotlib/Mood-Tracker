import React, { useState } from 'react';

import MoodForm from './MoodForm';
import './NewMood.css';

const NewMood = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveMoodDataHandler = (enteredMoodData) => {
    const moodData = {
      ...enteredMoodData,
      id: Math.random().toString(),
    };
    props.onAddMood(moodData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-mood'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Mood</button>
      )}
      {isEditing && (
        <MoodForm
          onSaveMoodData={saveMoodDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewMood;
