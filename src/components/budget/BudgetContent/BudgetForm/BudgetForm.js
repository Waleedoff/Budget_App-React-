import { Button } from 'components/ui'
import { useContext } from 'react'
import { useState } from 'react'
import {React} from 'react'
import { postTransaction, updateTransaction } from 'services/apis/Transaction.api'
import { categoriesContext } from 'services/context/budget/catogriesContext'
import { transactionsContext } from 'services/context/budget/transactionsContex'
import './BudgetForm.css'



let initailData = {
 title: '',
 amount: '',
 type: 'income',
 category: '',
 date: ''
}



const BudgetForm = ({closeModal,defalutData}) => {

    if (defalutData) { // !defalutData  == true ? initailData = {...defaultData};
        initailData = {...defalutData}
    }

    const [data,setData] = useState(initailData);

    const {data: categories, loading: catLoading} = useContext(categoriesContext);


    const {fetchData} = useContext(transactionsContext)

    const [loading , setLoading] = useState(false);
    // watch validation videos and apply that issues !! acc
    const handleValidation = () => {  

    }

   const handleChange = (e) => {
    console.log(e.target.value, e.target.name)
    setData(d => {
        return {
            ...d,
            [e.target.name]: e.target.value
        }
    })
   }

    const handleBlur = () => {

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        setLoading(true)
  
        try{

           if (defalutData) {
            await updateTransaction(defalutData.id,data);
           

           }
           else 
           {
            await postTransaction(data);
           
           }
           fetchData()
           
            
        }
        catch(error){
                console.log(error.message);
        }

    }
  return (
    <div className='new-budget'>
        <h2> {defalutData ? 'Edit' : "Add New"} Budget</h2>

        <form  className="form" onSubmit={handleSubmit}>
        <div className='form-group'>
            <label htmlFor="title">Title</label>
            <input 
            
            type="text" 
            id='title'
            name='title'
            className='error'
            placeholder='title...'
            value={data.title}
            onChange={handleChange}
            onBlur={handleBlur}

            />
            <p className='error'>errors</p>
            
            </div>


            
            <div className='form-group'>
            <label htmlFor="amount">Amount</label>
            <input 
            type="text" 
            id='amount'
            name='amount'
            className=''
            placeholder='amount...'
            value={data.amount}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            <p className='error'>errors</p>
            
            </div>

      
        {/* select for type and category, first make a class called form-row to make them in the same line */}


            <div className="form-row">
        
            <div className='form-group'>
            <label htmlFor="type">Type</label>
            <select 
            type="text" 
            id='type'
            name='type'
            className='error'
            placeholder='type'
            value={data.type}
            onChange={handleChange}
            onBlur={handleBlur}
            >
                <option value="income">Income</option>
                <option value="expanse">Expanse</option>

            </select>
            <p className='error'>errors</p>
            
            </div>

            {/* category section */}


            {catLoading ? <p>loading...</p> : (


                <div className='form-group'>
            <label htmlFor="category">Category</label>
            <select 
            type="text" 
            id='category'
            name='category'
            className='error'
            placeholder='category'
            value={data.categorys}  //check on it .
            onChange={handleChange}
            onBlur={handleBlur}
            >
                <option value="">Select Category</option>

                {categories.map(cat => (
                    
                    <option key={cat.id} value={cat.id}> {cat.name }</option>
                ))}

            </select>
            <p className='error'>errors</p>
            
            </div>

            )}



            </div>

            <div className='form-group'>
            <label htmlFor="date">Date</label>
            <input 
            type="date" 
            id='date'
            name='date'
            className='error'
            placeholder='date...'
            value={data.date}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            <p className='error'>errors</p>
            
            </div>
            <Button size='large' block >
                {defalutData ? 'Edit' : "Save"}
                
            </Button>



        </form>
        
    </div>
  )
}

export default BudgetForm