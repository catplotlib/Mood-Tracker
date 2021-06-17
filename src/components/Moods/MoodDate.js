import React from 'react';

import './MoodDate.css';

const MoodDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='mood-date'>
      <div className='mood-date__month'>{month}</div>
      <div className='mood-date__year'>{year}</div>
      <div className='mood-date__day'>{day}</div>
    </div>
  );
};

export default MoodDate;
