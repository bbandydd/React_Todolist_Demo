import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todoReducer from './todo/todoReducer';

const rootReducer = combineReducers({
    todoReducer,
});

export default applyMiddleware(thunk)(createStore)(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);
