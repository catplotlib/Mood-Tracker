import React from 'react';

import MoodItem from './MoodItem';
import './MoodsList.css';

const MoodsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='moods-list__fallback'>Found no moods.</h2>;
  }

  return (
    <ul className='moods-list'>
      {props.items.map((mood) => (
        <MoodItem
          key={mood.id}
          title={mood.title}
          amount={mood.amount}
          date={mood.date}
        />
      ))}
    </ul>
  );
};

export default MoodsList;
