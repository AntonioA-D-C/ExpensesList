import React, { useState } from 'react';

import './expensesfilter.css';

const ExpensesFilter = (props) => {
    const [value, setValue]= useState('');
    function changeValue(e){
  
        props.getFilterDate(e.target.value);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeValue} value={props.date}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;