import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [addNewExpenseButton, setAddNewExpenseButton] = useState(true);

  const handleTitleChange = (evt) => {
    setEnteredTitle(evt.target.value);
    // console.log(evt.target.value);
  };

  const handleAmountChange = (evt) => {
    setEnteredAmount(evt.target.value);
  };

  const handleDateChange = (evt) => {
    setEnteredDate(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log('submitted')
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setAddNewExpenseButton(true);
  };

  const handleFormToggler = () => {
    if (addNewExpenseButton) {
      // console.log('Im set to false')
      setAddNewExpenseButton(false);
    } else {
      // console.log('Im set to true')
      setAddNewExpenseButton(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {addNewExpenseButton ? (
        <div className="new-expense__add">
          <button type="button" onClick={handleFormToggler}>
            Add New Expense
          </button>
        </div>
      ) : (
        <>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={handleTitleChange}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-12-31"
                value={enteredDate}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={handleFormToggler}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </>
      )}
    </form>
  );
};

export default ExpenseForm;
