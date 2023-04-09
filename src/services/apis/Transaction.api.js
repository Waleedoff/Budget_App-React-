import axiosApi from './axiosApi';

 export const getTransactions = async () => { //get api for translation  //function
   const {data} = await axiosApi.get('/transactions')  //variable


  return data
}

