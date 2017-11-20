import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
let finalCreateStore = 
    (
    applyMiddleware(logger())
)(createStore)


export default function configureStore(initialState = {todos: [], user:{}}){
    return finalCreateStore(rootReducer, initialState)
}