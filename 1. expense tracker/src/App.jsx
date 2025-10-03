import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 231.32,
    date: new Date(2024, 2, 29),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 1.32,
    date: new Date(2024, 5, 29),
  },
  { id: "e3", title: "GPU", amount: 231.32, date: new Date(2024, 3, 29) },
  {
    id: "e4",
    title: "Motherboard",
    amount: 131.32,
    date: new Date(2024, 2, 29),
  },
  { id: "e5", title: "CPU", amount: 144.32, date: new Date(2024, 9, 29) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevState) => [...prevState, expense]);
  };

  return (
    <>
      <div>
        <h2>Let's get started!</h2>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </>
  );
};

export default App;
