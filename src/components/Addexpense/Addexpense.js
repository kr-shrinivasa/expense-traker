
import React from 'react'
import { useState } from 'react'
import './Addexpense.css'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
// import Modal from 'react-modal/lib/components/Modal';
import Modaldone from './Modal';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/actions/actions';


export default function AddexpenseForm() {

  const [modalOpen, setModalOpen] = useState(false);
    const [title, settitle] = useState("")
    const [amount, setamount] = useState("")
    const [description, setdescription] = useState("")
    const  dispatch = useDispatch()

    function handleTitle(e){
        settitle(e.target.value)
    }
    function handleAmount(e){
    const val = parseFloat(e.target.value);

        if (isNaN(val)) {
            setamount("");
            return;
          }
        setamount(e.target.value)
    }
    function handledisc(e){
        setdescription(e.target.value)
    }
    function handleSubmit(){
        if (title === "" || amount === "" ) {
            const notify = () => toast("Please enter complete data");
            notify();
            return;
          }
          const data = {
            title,
            amount,
            description,
            createdAt: new Date(),
          };
          setModalOpen(true)
          dispatch(addExpense(data))
    }

    return (


        <div className="add-form">
      <Modaldone modalOpen={modalOpen} />
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
     <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        /> 
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          placeholder="Enter Amount"
          className="amount-input"
          onChange={(e) => handleAmount(e)}
          value={amount}/>
            </div>


        <div className="form-item">
        <label>Description</label>
        <input
          placeholder="Give a name to your expenditure"
          value={description}
          onChange={(e) => handledisc(e)}
        /> 
      </div> 
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
            
    
    )
}
