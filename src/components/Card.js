import './Card.css'
import './MyExpenseItem.css'

function Card({children, className}){
    
    const classes ='card '+className
    console.log(classes)
    return <div className={classes}>{children}</div>
}

export default Card