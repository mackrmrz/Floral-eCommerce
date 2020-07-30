import { combineReducers } from "redux";

// import user from './user';
import products from './productsReducer';

const rootReducer = combineReducers({
    products
});


export default rootReducer;