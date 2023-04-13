import React from 'react'
import { useContext,useState } from 'react'
import { categoriesContext } from 'services/context/budget/catogriesContext'

const TransHeader = () => {
      


      // this state take a default data,
      const [inputs,setInputs] = useState({  
            keys: '',
            category: '',
            type: '',
      })

const handleChange = (event) => {
      // console.log(event.target.name, event.target.value);
      const name = event.target.name;
      const value = event.target.value;

      setInputs((d)=>{
            return {
                  ...d, [name]: value
            }
      })
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