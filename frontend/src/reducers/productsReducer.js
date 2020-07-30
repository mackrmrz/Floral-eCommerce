import { SHOW_PRODUCTS } from '../actions/types';

const INITIAL_STATE = {
    products: {}
}

export default function(state= INITIAL_STATE, action) {
    switch(action.type) {
        case SHOW_PRODUCTS:
            const products = action.payload;
            return{
                ...state,
                products
            }
        default: return state;
    }
}