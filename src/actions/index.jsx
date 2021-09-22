import {FETCH_DATA} from '../const/index';
import callAPI from '../contaners/index';


export const fetchAllProductRequets = () => {
  return (dispatch) => {
    return callAPI('users', 'GET', null).then(res=>{
        dispatch(actFetchData(res.data))
      })
  }
};

export const actFetchData = (products) => {
    return {
      type: FETCH_DATA,
      products 
    }
};
  
  
