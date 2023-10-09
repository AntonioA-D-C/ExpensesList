import './ExpenseForm.css'
import React, {useState} from 'react'
function ExpenseForm(props){
const [title, setTitle] = useState('');
const [amount, setAmount] = useState('');
const [date, setDate] = useState('');
const [displayForm, setDisplayForm]= useState(false);
 
    function titleChange(input){
        setTitle(input.target.value)
 
       
    }
    function amountChange(input){
        setAmount(input.target.value)
        
        
    }
    function dateChange(input){
        setDate(input.target.value)
      
         
    }
    const submitHandler =(event)=>{
        event.preventDefault();
        const expenseData={
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        props.getExpenseData(expenseData);
        setTitle('')
        setAmount('')
        setDate('');
    }
    return (
    <div>
            {!displayForm && <button onClick={()=>setDisplayForm(true)}>Add New Expense</button>}
  
  {!!displayForm &&  <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={(e)=>{titleChange(e)}}/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={amount} step="0.01"  onChange={(e)=>{amountChange(e)}}/>
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={date} min="2019-01-01" max="2022-12-31"  onChange={(e)=>{dateChange(e)}}/>
            </div>
        </div>
        <div className="new-expense__actions">
        <button onClick={()=>{setDisplayForm(false)}}>Cancel</button>
            <button type="submit">Add Expense</button>
          
        </div>
    </form>}
    </div>
    )
}

export default ExpenseForm