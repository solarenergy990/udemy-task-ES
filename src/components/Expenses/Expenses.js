import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleFilterChange = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={handleFilterChange}
        />
        {expenses
          .filter(
            (expense) => expense.date.getFullYear() === Number(filteredYear)
          )
          .map((expense) => {
            const { title, amount, date, id } = expense;
            return (
              <ExpenseItem key={id} title={title} amount={amount} date={date} />
            );
          })}
      </Card>
    </div>
  );
};

export default Expenses;
