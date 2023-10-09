import './ExpenseDate.css';
function DateComponent({date}){
    console.log(date)
    const newDate= new Date(date)
return(
    <div className="expense-date">
    <div className="expense-date__month">{newDate.toLocaleString('en-US', {month: 'long'})}</div>
    <div className="expense-date__day">{newDate.toLocaleString('en-US', {day: '2-digit'})}</div>
    <div className="expense-date__year">{newDate.getFullYear()}</div>
    </div>
);
}

export default DateComponent;