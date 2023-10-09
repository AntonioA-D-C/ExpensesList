import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import MyExpenseItem from "./MyExpenseItem";
import { useState } from "react";
 import './NewComponentExpenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./NewExpense/ExpensesChart";
function NewComponentExpenses({expenses}){
      const [date, setFilterDate] = useState("");

      const filteredExpenses= expenses.filter((itemContainsDate)=>itemContainsDate.date.getFullYear()==date);
      function getFilterDate(date){
            setFilterDate(date);
            console.log("The filtered date "+date)
      }
   

return(
<div className="allExpensesContainer" >
    <ExpensesFilter date={date} getFilterDate={getFilterDate}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
 
</div>
)
}

export default NewComponentExpenses