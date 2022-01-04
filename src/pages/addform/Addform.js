

import './addform.css'
import React from 'react'
import AddexpenseForm from '../../components/Addexpense/Addexpense'
import Topfold from '../../components/topfold/Topfold'

export default function Addform() {
    return ( 
        <div>
            <Topfold/>
            <AddexpenseForm/>
        </div>
    )
}
