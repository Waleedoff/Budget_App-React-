// import { Tabs } from 'phosphor-react'
import React from 'react'
import './BudgetContent.css'
import { Tabs,Tab } from 'components/ui'

const BudgetContent = () => {
  return (
    <div className='budget_content'>
        <div className="container">
            <Tabs>
                <Tab title='data'>
                        content
                </Tab>

                <Tab title='income'>
                        content1
                </Tab>

                <Tab title='expense'>
                        content2
                </Tab>


            
            </Tabs>
        </div>
    </div>
  )
}

export default BudgetContent