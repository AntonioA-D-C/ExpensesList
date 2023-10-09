import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
           
        }
        props.addExpenseHandler(expenseData);
       
    }
    return (
    <div className="new-expense">
    <ExpenseForm getExpenseData={saveExpenseDataHandler}/>
    </div>
    )
}

export default NewExpense;