import { useCallback } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useReducer } from "react";
import {  useRef ,useState} from "react";
import { createContext } from "react";
import { deleteTransactions, getTransactions } from "services/apis/Transaction.api";

const InitialStatee = {
    data: [],  
    loading: false,
    error: null, 
} 

export const transactionsContext =  createContext()












const contextReducer = (state,action) => {
    switch(action.type){
        case 'FETCH_START':  // if type == fetch_start return this object.
            return {...state, loading: true, error: null};
        case 'FETCH_SUCCESS':
            return {...state, loading: false, data: action.payload}; //payload == body
        case 'FETCH_ERROR':
            return {...state, loading: false, error: action.payload};
        case 'STOP_LOADING':
            return {...state,loading: false }
         
        default:
            return  state
 }
}




export const TransactionsProvider = ({children}) => {
    
    
    const [statee,dispttch]  = useReducer(contextReducer,InitialStatee)

    const [filter,setFilter] = useState({
        date: false,
        amount: false,
        category: null,
        type: null,
        
    })

    const handleFilter = (filterData) => {
        setFilter(filterData);
    }
    
    console.log({filter})

    const filteredData = useMemo(()=> {

        let data = [...statee.data]

        if (!data || !data.length) {
            return []
        }
        if (filter.keys && filter.keys === 'date')
        {
            data = data.sort((a,b)=>{
                const aDate = new Date(a.date).getTime()
                const bDate = new Date(b.date).getTime()
                return bDate - aDate
            })
        }


        if (filter.keys && filter.keys === 'amount')
        {
            data = data.sort((a,b)=>{
                
                return +b.amount - +a.amount
            })
        }


        if (filter.category)
        {
            // eslint-disable-next-line eqeqeq
            data = data.filter(d => d.category == filter.category)
        }

        if (filter.type)
        {
            // eslint-disable-next-line eqeqeq
            data = data.filter(d => d.type == filter.type)
        }

            return data
        

    },[statee.data,filter])


    // computed total value.

    const totals = useMemo(()=> {
        let income = 0;
        let expense = 0;


       if(statee.data && statee.data.length){

        statee.data.forEach(d=> {
            if (d.type === 'income') {
                income += +d.amount
            }
            else {
                expense += +d.amount
            }
    })

       }
        return {
            income, expense, total: income - expense
        }

    },[statee.data,filter])


    
    // 
    const isMount = useRef(false)
    


      
      const handleDelete = async (id)=> {
        try{
            dispttch({type: 'FETCH_START'})
             await deleteTransactions(id)
            // dispttch({type: 'STOP_LOADING'})
            fetchData()
        }
        catch(error){
            dispttch({type: 'FETCH_ERROR',payload: error.message})
        }
        
    }

    
    const fetchData = useCallback ( async ()=> {
        dispttch({type: 'FETCH_START'})
        try{
            const dataa = await getTransactions()
            dispttch({type: 'FETCH_SUCCESS', payload: dataa})
        }
        catch(error){
            dispttch({type: 'FETCH_ERROR',payload: error.message})
        }
        
    },[])

  



    useEffect(()=> {
        if (!isMount.current){ // !isMount ? fetchData : isMount.current = true;
            fetchData()
           
            // deleteData();
            isMount.current = true
            }

        // !isMount.current ? fetchData() : isMount.current = true;
        
    },[])
    
    
    
    
    return (
       
        <transactionsContext.Provider value = {{...statee ,handleDelete,fetchData,handleFilter,filteredData,totals}}>

            {children}
            
        </transactionsContext.Provider>
       
        
    )
}

export default TransactionsProvider
