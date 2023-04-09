import React from 'react'
import './Transaction.css'
import TransHeader from './shared/TransHeader'
import TransContent from './shared/TransContent'
const  Transaction = () => {
  return (
    <section className='trans'>
        <TransHeader/> 
        <TransContent/>
       
    </section>
  )
}

export default Transaction