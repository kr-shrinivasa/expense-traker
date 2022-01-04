import React from "react";
import "./addform.css"
import AddForm from "../../components/ExpenseAddform/Addform";
import TopFold from "../../components/folds/Topfold";


const NewExpense = () => {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm/>
    </div>
  );
};

export default NewExpense;