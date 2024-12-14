import { createContext, useReducer, useState } from "react";
import { DUMMY_EXPENSES } from "../constants/dummy-data";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ title, description, amount, date }) => {},
  deleteExpense: (id) => {},
  editExpense: (id, { title, description, amount, date }) => {},
});

// the use of Reducer function
function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id === action.payload);
    case "UPDATE":
      const updatedIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatebleExpense = state[updatedIndex];
      const updatedItem = { ...updatebleExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatedIndex] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(data) {
    dispatch({ type: "ADD", payload: data });
  }

  function deleteExpnse(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function editExpense(id, data) {
    dispatch({ type: "UPDATE", payload: { id: id, data: data } });
  }

  const value = {
    addExpense: addExpense,
    deleteExpnse: deleteExpnse,
    editExpense: editExpense,
    expenseData: expensesState,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
