import { combineReducers } from 'redux';
import counter from './counter';
import myReducer from './myreducer';
import userReducer from './userReducer';
 

const rootReducer = combineReducers({
    myReducer ,
    userReducer
 
});

export default rootReducer;