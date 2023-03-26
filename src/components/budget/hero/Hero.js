import React from 'react'
import './Hero.css'
import BudgetNumbers from './BudgetNumbers'

const  Hero = () => {
  return (
   
    <div className='here_budget'>
        <div className='hero_budget-bg'>
            <img src='https://unsplash.it/1200/400' alt='random img'/>

        </div>
        
      
        <div className='container'>
            <div className='hero_budget-numbers'>
                <BudgetNumbers money='500' title='totoal money'>icon</BudgetNumbers>
                <BudgetNumbers money='500' title='totoal income'>icon</BudgetNumbers>
                <BudgetNumbers money='500' title='totoal expense'>icon</BudgetNumbers>

            </div>
        </div>
    </div>
    
  )
}

export default Hero