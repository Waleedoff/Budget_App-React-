import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import TransactionsProvider from 'services/context/budget/transactionsContex';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
<TransactionsProvider>


<App />


</TransactionsProvider>
 

      
    


  
);


