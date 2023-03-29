import React from 'react'
import SingleTrans from './SingleTrans'
function TransContent() {
  return (
    <div className='trans_content'>
        <SingleTrans/>
        <SingleTrans/>
        

        <p className="no-data">No Data</p>
            <p>loading ...</p>
            <p>error</p>
        </div>
  )
}

export default TransContent