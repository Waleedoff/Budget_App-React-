import { useCallback } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import {  useRef } from "react";
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
            const data = await getTransactions()
            dispttch({type: 'FETCH_SUCCESS', payload: data})
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
       
        <transactionsContext.Provider value = {{...statee ,handleDelete,fetchData}}>

            {children}
            
        </transactionsContext.Provider>
       
        
    )
}

export default TransactionsProvider
