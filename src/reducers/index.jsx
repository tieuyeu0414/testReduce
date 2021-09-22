import {combineReducers} from 'redux';
import myreducer from './myreducer';

const myReducer = combineReducers({
    myreducer: myreducer
})

export default myReducer