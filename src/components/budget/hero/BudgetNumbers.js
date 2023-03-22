import React from 'react'
import './Hero.css'




function BudgetNumbers(props) {
  return (
    <div className='budget_numbers'>

        <div className='budget_numbers-icon'>
            {props.children}

        </div>

        <div className='budget_numbers-money'>
            <div>${props.money}</div>
            <div>{props.title}</div>
            
        </div>

    </div>
  )
}

export default BudgetNumbers