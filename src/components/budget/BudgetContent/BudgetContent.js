// import { Tabs } from 'phosphor-react'
import React, { useMemo } from 'react'
import './BudgetContent.css'
import { Tabs,Tab } from 'components/ui'
import Transaction from './transactions/Transaction'
import { useContext } from 'react'
import { transactionsContext } from 'services/context/budget/transactionsContex'
import { categoriesContext } from 'services/context/budget/catogriesContext'
import DougnutChart from 'components/ui/DougnutChart/DougnutChart'
const BudgetContent = () => {

  const {data: transactions} = useContext(transactionsContext);
  const {data: catData} = useContext(categoriesContext);
 

  const chartData = useMemo(()=>{
    const data = [...transactions];
   
    const chartData = {income:null, expanse: null} // initial data = null.

      if (transactions && transactions.lenght && catData && catData.lenght){
        chartData.income ={}
        chartData.expanse = {}
        
        data.forEach(d=> {
          // eslint-disable-next-line eqeqeq
          let catName = catData.find( c => c.id == d.category).name;
          if (d.type === 'income') {
            if (chartData.income[catName]) {
              chartData.income[catData] += +d.amount
            }
            else {
              chartData.income[catData] = +d.amount

            }
          }
          else 
          {
            if (chartData.expanse[catName]) {
              chartData.expanse[catData] += +d.amount
            }
            else {
              chartData.expanse[catData] = +d.amount

            }
          }

        })
     
     
      } 



    return chartData

  },[transactions,catData])


    console.log(chartData);
  return (
    <div className='budget_content'>
        <div className="container">
            <Tabs>
                <Tab title='data'>
                       <Transaction/>
                </Tab>

                <Tab title='income'>
                        <DougnutChart data={chartData.income}/>
                </Tab>

                <Tab title='expense'>
                <DougnutChart data={chartData.expanse}/>
                </Tab>


            
            </Tabs>
        </div>
    </div>
  )
}

export default BudgetContent