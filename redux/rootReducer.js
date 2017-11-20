import todoReducer from './reducers/TodoReducer';
import userReducer from './reducers/UserReducer';
import {combineReducers} from 'redux';

const rootReducer = new combineReducers({
    todos: todoReducer,
    user: userReducer
})
export default rootReducer; 