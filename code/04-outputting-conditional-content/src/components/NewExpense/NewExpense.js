import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import NewExpensePlaceHolder from './NewExpensePlaceHolder';

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsFormOpen(false);
  };

  const cancelFormHanlder=()=>{
    setIsFormOpen(false);
  }

  const addNewExpenseButtonClickHandler=()=>{
    setIsFormOpen(true);
  }

  if (isFormOpen)
    return  (
      <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onFormCancel={cancelFormHanlder} /> 
      </div>
    );

  return (
    <div className='new-expense'>
       <NewExpensePlaceHolder onAddNewExpenseButtonClick={addNewExpenseButtonClickHandler} />
    </div>
  );
};

export default NewExpense;
