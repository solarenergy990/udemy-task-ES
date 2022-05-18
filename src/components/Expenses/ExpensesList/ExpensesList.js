import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem";

const ExpensesList = ({ listItems }) => {
  return (
    <ul className="expenses-list">
      {listItems.length === 0 && <h2 className="expenses-list__fallback">No expenses found</h2>}
      {listItems.map((expense) => {
        const { title, amount, date, id } = expense;
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
