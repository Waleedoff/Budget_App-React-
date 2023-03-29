import React from 'react'

const TransHeader = () => {
  return (
    <div className="trans_header">
        <h3 className="trans_header_title">
             Recent Transactions   
        </h3>
        <div className="trans_header-filters">
         <select className='filter_select' name='keys'>
               <option value="">Sort by</option> 
         </select>

         <select className='filter_select' name='category'>
               <option value="">Categories</option> 
         </select>

         <select className='filter_select' name='type'>
               <option value="">All </option> 
         </select>
        </div>
    </div>
  )
}

export default TransHeader