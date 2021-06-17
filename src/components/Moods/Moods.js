import React, { useState } from 'react';

import Card from '../UI/Card';
import MoodsFilter from './MoodsFilter';
import MoodsList from './MoodsList';
import './Moods.css';

const Moods = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredMoods = props.items.filter((mood) => {
    return mood.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='moods'>
        <MoodsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <MoodsList items={filteredMoods} />
      </Card>
    </div>
  );
};

export default Moods;
