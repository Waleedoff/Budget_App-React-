import { useCallback } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import {  useRef } from "react";
import { createContext } from "react";
import { getTransactions } from "services/apis/Transaction.api";

const InitialStatee = {
    data: [],  
    loading: false,
    error: null, 
} 

export const transactionsContext =  createContext()










const contextReducer = (state,action) => {
    switch(action.type){
        case 'FETCH_START':
            return {...state, loading: true, error: null};
        case 'FETCH_SUCCESS':
            return {...state, loading: false, data: action.payload}; //payload == body
        case 'FETCH_ERROR':
            return {...state, loading: false, error: action.payload};

         
        default:
            return  state
 }
}



// eslint-disable-next-line react-hooks/rules-of-hooks

export const TransactionsProvider = ({children}) => {
    
    
    const [statee,dispttch]  = useReducer(contextReducer,InitialStatee)
    
    

    
    // 
    const isMount = useRef(false)


    
    const fetchData = useCallback ( async ()=> {
        // dispttch({type: 'FETCH_START'})
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
            isMount.current = true
            }

        // !isMount.current ? fetchData() : isMount.current = true;
        
    },[fetchData])
    
    
    
    
    return (
       
        <transactionsContext.Provider value = {{...statee}}>

            {children}
            
        </transactionsContext.Provider>
       
        
    )
}

export default TransactionsProvider
