import ExpenseItem from "../ExpenseItem";
import './Expenses.css'

const Expenses = ({expenses}) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => {
        const { title, amount, date, id } = expense;
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </div>
  );
};

export default Expenses;
