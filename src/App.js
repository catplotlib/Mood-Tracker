import React, { useState } from 'react';

import NewMood from './components/NewMood/NewMood';
import Moods from './components/Moods/Moods';

const DUMMY_EXPENSES = [
  
];

const App = () => {
  const [moods, setMoods] = useState(DUMMY_EXPENSES);

  const addMoodHandler = (mood) => {
    setMoods((prevMoods) => {
      return [mood, ...prevMoods];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Moods, { items: moods })
  // );

  return (
    <div>
      <NewMood onAddMood={addMoodHandler} />
      <Moods items={moods} />
    </div>
  );
};

export default App;
