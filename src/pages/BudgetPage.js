import React from 'react'
import MainLayout from '../layout/MainLayout'
import Here from 'components/budget/hero/Hero'
import BudgetContent from 'components/budget/BudgetContent/BudgetContent'
const  BudgetPage = () => {
  return (
    <div>
        <MainLayout>
          <Here/>
       <BudgetContent/>
        </MainLayout>
    </div>
  )
}

export default BudgetPage