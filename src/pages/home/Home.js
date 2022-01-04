

import React from 'react'
import Expensebox from '../../components/expensebox/Expensebox'
import Topfold from '../../components/topfold/Topfold'

export default function Home() {
    return (
        <div className='home'>
            <Topfold></Topfold>
            <Expensebox/>
        </div>
    )
}
