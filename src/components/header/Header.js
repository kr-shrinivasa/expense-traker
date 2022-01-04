

import "./header.css"
import React from 'react'
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav className='nav-list'>
                <NavLink className="link" to="/"><h1 className="logo">Expense Book</h1> </NavLink>               
                <NavLink to="/login" className="link">Login</NavLink>     
            </nav>
        </header>  
    )
}
