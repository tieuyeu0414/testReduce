
// import {ADD_CLICK} from '../const/index';
import { FETCH_DATA } from "../const";
const initialState = []
  
const reducer = (state = initialState, action) => {
    switch (action.type){
      case FETCH_DATA:
        return [...action.products]
      default:
        return state;
    }
  };
  export default reducer