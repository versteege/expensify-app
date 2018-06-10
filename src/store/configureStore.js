import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import appglobalsReducer from '../reducers/appglobals';

// Create store
export default () => {
    const store  = createStore(
        combineReducers({
                expenses: expensesReducer,
                filters: filtersReducer,
                appglobals: appglobalsReducer
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;    
};
