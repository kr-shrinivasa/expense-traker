import React from 'react'
import {NavLink} from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <header >
            <nav className='nav-list'>
                <h1>Expense book</h1>
                {/* <NavLink to="/sheet" className="">Expensees</NavLink> */}
                <NavLink to="/login" className="link">Login</NavLink>
            </nav>
        </header>
    )
}
