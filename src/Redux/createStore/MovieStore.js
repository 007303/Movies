import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import MovieReducer from '../Reducers/MovieReducer'
const Store=()=>{
const configStore=createStore(combineReducers({
        Movies:MovieReducer
}),applyMiddleware(thunk))
return configStore
}
export default Store