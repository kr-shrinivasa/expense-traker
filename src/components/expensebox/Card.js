


import React from 'react'
import moment from 'moment'
import "./card.css"
import { deleteExpense } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";


export default function Card({item, notifySuccess}) {
    const time= moment(item.date).fromNow()
    const dispatch = useDispatch()
    const handleDelete = () => {
        notifySuccess();
        dispatch(deleteExpense(item));
      };
    
    return (
        <>
        <div >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className='time'>{time}</p>
              </div>
              <div>
                <h4>₹ {item.amount}</h4>
              <div><i className='fa fa-trash' onClick={handleDelete}></i></div>
              </div>

              </>
    )
}
