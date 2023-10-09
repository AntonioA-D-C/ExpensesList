import React from 'react';
import "./ExpensesList.css"
import MyExpenseItem from './MyExpenseItem';
function ExpensesList(props){
    
    if(props.items.length==0){
        return <h2 className='="expenses-list__fallback'>Found no expenses</h2>
     } 
  return <ul className="expenses-list">
{
       props.items.map((item)=>(<MyExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />))

}
  </ul>
}

export default ExpensesList