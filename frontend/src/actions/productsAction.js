import { SHOW_PRODUCTS } from './types';

import axios from "axios";


export function fetchingData() {
    return function(dispatch) {
        axios.get('http://localhost:5000/products')
            .then(response => {
                console.log("response", response);
                dispatch({
                    type: SHOW_PRODUCTS,
                    payload: response.data.products
                })
            })
    }

}