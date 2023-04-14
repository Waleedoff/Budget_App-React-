import React from 'react'
import './Hero.css'
import BudgetNumbers from './BudgetNumbers'
import {Coins, Wallet,CreditCard} from 'phosphor-react'
import { useContext } from 'react'
import { transactionsContext } from 'services/context/budget/transactionsContex'
const  Hero = () => {

    const {totals} = useContext(transactionsContext);
    
  
  return (
   
    <div className='here_budget'>
        <div className='hero_budget-bg'>
            <img src='https://unsplash.it/1200/400' alt='random img'/>

        </div>
        
      
        <div className='container'>
            <div className='hero_budget-numbers'>
                <BudgetNumbers money={totals.total} title='totoal money'><Coins weight='duotone'/></BudgetNumbers> 
                <BudgetNumbers money={totals.income} title='totoal income'><Wallet weight='duotone'/></BudgetNumbers>
                <BudgetNumbers money={totals.expense} title='totoal expense'><CreditCard weight='duotone'/></BudgetNumbers>

            </div>
        </div>
    </div>
    
  )
}

export default Hero