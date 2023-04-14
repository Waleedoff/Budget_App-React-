import React from 'react'
import { useContext,useState } from 'react'
import { categoriesContext } from 'services/context/budget/catogriesContext'
import { transactionsContext } from 'services/context/budget/transactionsContex'

const TransHeader = () => {
      
      const {handleFilter} = useContext(transactionsContext);


      // this state take a default data,
      const [inputs,setInputs] = useState({  
            keys: '',
            category: '',
            type: '',
      })

const handleChange = (event) => {
      // console.log(event.target.name, event.target.value);
      const name = event.target.name;  // names example keys and category and types
      const value = event.target.value; // values example value of the keys


      const f = {...inputs, [name]: value}
      setInputs(f)

      handleFilter(f)
      }
      console.log(inputs);
      

      const {data: catData} = useContext(categoriesContext)
  return (
    <div className="trans_header">
        <h3 className="trans_header_title">
             Recent Transactions   
        </h3>
        <div className="trans_header-filters">
         <select className='filter_select' name='keys' onChange={handleChange} value={inputs.keys}>
               <option value="">Sort by</option> 
               <option value="date">Date</option> 
               <option value="amount">Amount</option> 
         </select>

         <select className='filter_select' name='category' onChange={handleChange} value={inputs.keys}>
            <option value="">Categories</option>
               {
                     catData && catData.map((cat)=>(
                      <option  key={cat.id} value={cat.id}>{cat.name}</option> 

                ))
                  // return categories from api.
               }
         </select>

         <select className='filter_select' name='type' onChange={handleChange} value={inputs.keys}>
               <option value="">All </option>
               <option value="income">Income </option>
               <option value="expanse">Expanse </option>

         </select>
        </div>
    </div>
  )
}

export default TransHeader