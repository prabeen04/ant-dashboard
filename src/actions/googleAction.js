import { SET_GOOGLE_ADDRESS, GET_GOOGLE_ADDRESS } from '../types/googleActionTypes';

export const setGoogleAddress = address => dispatch => {
    console.log(address)
    return dispatch({
        type: SET_GOOGLE_ADDRESS,
        payload: address
    })
}