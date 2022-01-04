import React from 'react'
import ExpenseList from '../../components/expenselist/ExpenseList'
import TopFold from '../../components/folds/Topfold'

export default function Home() {
    return (
        <div className='home'>
            <TopFold/>
            <ExpenseList></ExpenseList>
        </div>
    )
}
