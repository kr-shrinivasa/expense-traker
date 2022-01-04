import React, { useState } from "react";
import { NavLink } from "react-router-dom"

import "./topfolds.css";




const TopFold = () => {
  const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    // dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i class="fa fa-search"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <NavLink to="/add-expense">
            <div className="add-button">
              <i class="fa fa-plus"></i>
              <label>Add</label>
            </div>
          </NavLink>
        </div>
      ) : (
        <div className="add-topfold">
          <NavLink to="/">
            <div className="add-topfold-button">
              <i class="fa fa-angle-left"></i>
              <label>Back</label>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="add-topfold-button">
              <i class="fA fa-cross-circle"></i>
              <label>Cancel</label>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TopFold;
