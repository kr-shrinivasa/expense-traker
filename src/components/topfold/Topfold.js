import "./Topfold.css";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Topfold() {
  const [search, setsearch] = useState("");
  function searchChange(e) {
    setsearch(e.target.value);
  }
  return (
    <section className="topfold">
      {window.location.pathname === "/" ? (
        <>
          <div className="searchbox">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="search expepenses"
              onChange={searchChange}
            />
          </div>
          <div>
            <i className="fa fa-plus"></i>
            <NavLink to="/add-expense"><label> Add</label></NavLink>
            
          </div>
        </>
      ) : (
        <>
          <div className="box">
            <i className="fa fa-angle-left"></i>
            <NavLink to="/"><label> Back</label></NavLink>
            
          </div>
          <div>
            <i className="fa fa-cross-circle "></i>
            <NavLink to="/"><label>Cancel</label></NavLink>

            
          </div>
        </>
      )}
    </section>
  );
}
