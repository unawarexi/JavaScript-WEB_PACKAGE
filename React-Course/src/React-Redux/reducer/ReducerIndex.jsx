import {combineReducers} from "redux"
import cakeReducer from "./CakeReducer"

const rootReducers =  combineReducers({
    cakes : cakeReducer,
})

export default rootReducers;