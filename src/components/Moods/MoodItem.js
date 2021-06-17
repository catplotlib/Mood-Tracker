import React from 'react';

import MoodDate from './MoodDate';
import Card from '../UI/Card';
import './MoodItem.css';

const MoodItem = (props) => {
  return (
    <li>
      <Card className='mood-item'>
        <MoodDate date={props.date} />
        <div className='mood-item__description'>
          <h2>{props.title}</h2>
        </div>
      </Card>
    </li>
  );
};

export default MoodItem;
