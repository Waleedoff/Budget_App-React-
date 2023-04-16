import React from 'react'
import './DougnutChart.css'

import {Chart as ChartJs,ArcElement, Tooltip,Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

ChartJs.register(ArcElement, Tooltip,Legend);



const options = {
    plugins: {
        legend: {
            labels: {
                color: '#fff'
            }
        } 
    }
}
const DougnutChart = ({data}) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                data: Object.values(data)
            }
        ]
    }
  return (
    <div className='dougnut-chart'>
        <div className="dougnut-chart-box">
            {/* and update dougnut app over here */}
                <Doughnut data={chartData} options={options}/>

        </div>
    </div>
  )
}

export default DougnutChart