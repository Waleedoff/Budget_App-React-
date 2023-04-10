import React from 'react'
import './Hero.css'
const  BudgetNumbers = (props) => {
  return (
    <div className='budget_numbers'>
        
        <div className='budget_numbers-icon'>
            {props.children} 
            {/* add here anything you want!! cause it's children */}
        
        </div>

        <div className='budget_numbers-money'>
            <div>${props.money}</div>
            <small>{props.title}</small>
            
        </div>

    </div>
  )
}

export default BudgetNumbers