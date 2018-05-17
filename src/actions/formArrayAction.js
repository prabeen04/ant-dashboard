import { SET_CURRENCY, SET_AMOUNT, SET_AMOUNT_IN_CURRENCY } from '../types/formArrayActionTypes';

export const setCurrency = value => dispatch => {
    return dispatch({
        type: SET_CURRENCY,
        payload: value
    })
}