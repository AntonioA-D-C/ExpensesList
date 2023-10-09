import DateComponent from './DateComponent';
import './MyExpenseItem.css'
import Card from './Card';
import { useState } from 'react';

function MyExpenseItem({title, amount, date}) {
  const [thisTitle, setTitle] = useState(title);

  function changeTitle(){
    setTitle("Updated");
  }
    return (
       <Card className="expense-item">

          <DateComponent date={date}/>
            <div className="expense-item__description">
                <h2>{thisTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={()=>{changeTitle()}}>Press me</button>
        </Card>
    );
}

export default MyExpenseItem;