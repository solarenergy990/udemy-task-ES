import React from "react";
import { nanoid } from 'nanoid'

import ExpenseForm from './ExpenseForm'
import "./NewExpense.css";

const NewExpense = ({onAddExpense}) => {
    const handleExpenseDataSave = (data) => {

        const expenseData = {
            ...data,
            id: nanoid(10),
        }

        onAddExpense(expenseData)
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleExpenseDataSave}/>
    </div>
  );
};

export default NewExpense;
