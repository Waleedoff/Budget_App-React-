import React from 'react'
import './Hero.css'
import BudgetNumbers from './BudgetNumbers'
import {Coins, Wallet,CreditCard} from 'phosphor-react'
const  Hero = () => {
  return (
   
    <div className='here_budget'>
        <div className='hero_budget-bg'>
            <img src='https://unsplash.it/1200/400' alt='random img'/>

        </div>
        
      
        <div className='container'>
            <div className='hero_budget-numbers'>
                <BudgetNumbers money='500' title='totoal money'><Coins weight='duotone'/></BudgetNumbers>
                <BudgetNumbers money='500' title='totoal income'><Wallet weight='duotone'/></BudgetNumbers>
                <BudgetNumbers money='500' title='totoal expense'><CreditCard weight='duotone'/></BudgetNumbers>

            </div>
        </div>
    </div>
    
  )
}

export default Hero