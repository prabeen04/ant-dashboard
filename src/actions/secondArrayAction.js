import { GET_PRODUCTS } from '../types/secondArrayActionTypes';

export const getProducts = dispatch => {
    return dispatch({
        type: GET_PRODUCTS
    })
}