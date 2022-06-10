import React, { useState } from 'react';

import './ExpenseForm.css';

const NewExpensePlaceHolder = (props) => {
 

  return (
    <form >
      <div className='new-expense__controls'> 
      <button type='button' onClick={props.onAddNewExpenseButtonClick}>Add New Expense</button>
      </div>
    </form>
  );
};

export default NewExpensePlaceHolder;
