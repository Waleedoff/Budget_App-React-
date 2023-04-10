import axiosApi from './axiosApi';

 export const getTransactions = async () => { //get api for translation  //function
   const {data} = await axiosApi.get('/transactions')  //variable

   return data
  }
  


  // to delete transaction from api 
   export const deleteTransactions = async (id) => { //get api for translation  //function
    const {data} = await axiosApi.delete('/transactions/'+id)  //variable
      return data;
   }
   

 
