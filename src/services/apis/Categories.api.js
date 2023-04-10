import axiosApi from './axiosApi';

 export const getCategories = async () => { //get api for translation  //function
   const {data} = await axiosApi.get('/categories')  //variable

   return data
  }
  
