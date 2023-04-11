import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import TransactionsProvider from 'services/context/budget/transactionsContex';
import CategoriesProvider from 'services/context/budget/catogriesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
<TransactionsProvider>
<CategoriesProvider>

<App />

</CategoriesProvider>
</TransactionsProvider>
 

      
    


  
);


