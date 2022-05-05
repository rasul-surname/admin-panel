import {combineReducers, createStore} from "redux";
import productReducer from "./product-reducer";

let reducers = combineReducers({
    productPage: productReducer
})

let store = createStore(reducers);

export default store;