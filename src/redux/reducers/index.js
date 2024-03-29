import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./product Reducers";


 export const reducers = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
});