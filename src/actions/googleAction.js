import { SET_GOOGLE_ADDRESS, GET_GOOGLE_ADDRESS } from '../types/googleActionTypes';

export const setGoogleAddress = dispatch => address => {
    return dispatch({
        type: SET_GOOGLE_ADDRESS,
        payload: address
    })
}