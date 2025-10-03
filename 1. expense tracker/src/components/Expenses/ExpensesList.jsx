import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <>
        <h2>No expense found.</h2>
      </>
    );
  }
  return (
    <>
      <ul className="expenses-list">
        {props.items.map((el, id) => (
          <ExpenseItem
            key={id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        ))}
      </ul>
    </>
  );
}

export default ExpensesList;
