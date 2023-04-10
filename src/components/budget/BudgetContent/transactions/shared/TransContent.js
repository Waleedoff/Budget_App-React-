import { useEffect, useRef } from "react";
import { useContext } from "react";
import { categoriesContext } from "services/context/budget/catogriesContext";
import { transactionsContext } from "services/context/budget/transactionsContex";
import SingleTrans from "./SingleTrans";


const  TransContent = () => {


  const {data: transactions ,loading,error} = useContext(transactionsContext)
  const {data: categories, loading: catLoading} = useContext(categoriesContext)

// console.log({data, loading,error});

 
return (


  <div className='trans_content'>

     
    

      {!loading && !catLoading && transactions && transactions.length && categories.length && !error ?  (
        <>
        {
transactions.map((e)=>(
  
  <SingleTrans e = {e} key={e.id} categories = {categories} />  // passing props insdie SingleTrans Tag ((e)) and minpluation inside the tag;
  
))}
        </>
      ): <></>}

{loading && catLoading && (

<p className="loading">loading ...</p>
)}

{error && !loading &&(

<p className="error_data">{error}</p>
)}


      <div className="no-data">No Data</div>
      </div>
)
}

export default TransContent