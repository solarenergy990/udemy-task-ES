import { useState } from "react";

import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from './ExpensesList/ExpensesList'
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleFilterChange = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={handleFilterChange}
        />
        <ExpensesList listItems={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
