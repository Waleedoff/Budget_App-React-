import React from 'react'
import MainLayout from '../layout/MainLayout'
import Here from 'components/budget/hero/Hero'
import BudgetContent from 'components/budget/BudgetContent/BudgetContent'
import Transaction from 'components/budget/BudgetContent/transactions/Transaction'
const  BudgetPage = () => {
  return (
    <div>
        <MainLayout>
          <Here/>
       <BudgetContent/>
       <Transaction/>
        </MainLayout>
    </div>
  )
}

export default BudgetPage