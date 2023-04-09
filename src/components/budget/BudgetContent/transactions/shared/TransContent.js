import { useEffect, useRef } from "react";
import { useContext } from "react";
import { transactionsContext } from "services/context/budget/transactionsContex";
import SingleTrans from "./SingleTrans";


const  TransContent = () => {


  const {data: transactions ,loading,error} = useContext(transactionsContext)

// console.log({data, loading,error});

 
  return (


    <div className='trans_content'>



      
{
  transactions.map((e)=>(
    <SingleTrans e = {e} key={e.id}/>
))}


        
        
       
        

        <p className="no-data">No Data</p>
        {loading && (

            <p>loading ...</p>
        )}

        {error && (

            <p>error</p>
        )}
        </div>
  )
}

export default TransContent