import {useState} from 'react'
import "./ExpenseItem.css";
import Card from '../Card/Card'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date }) => {
  const [expenseTitle, setExpenseTitle] = useState(title)
  
  const handleClick = () => {
    setExpenseTitle('Updated!')
    console.log('clicked')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
