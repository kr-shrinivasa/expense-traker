import "./expensebox.css";
// import { useState } from "react";
import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";



export default function Expensebox() {
    const { expenseList: list, query } = useSelector((state) => state.expenses);
    const filteredList = list.filter((item) => item.title.includes(query));
    const notifySuccess = () => toast.success("Expense Deleted!");

  return (
    <div>
         <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <section className="expense-box">
      {filteredList ?
        
        (
        filteredList.map((item) => (
            <div className="items">
          <Card item={item} notifySuccess={notifySuccess} />
          </div>
        ))
      )
        : <div><h1>click Add to add expenses </h1></div>
        }
        </section>
    </div>
  );
}
