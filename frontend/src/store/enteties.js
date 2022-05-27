import { combineReducers } from 'redux';
import reducers from './combindReducer';


const rootReducer =  combineReducers({
        Entities: reducers,
});

export default rootReducer;
