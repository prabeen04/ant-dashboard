import { SET_SELECT_VALUE, SET_DATE } from '../types/testFormActionTypes';
export const setSelectValue = value => dispatch => {
    return dispatch({
        type: SET_SELECT_VALUE,
        payload: value
    })
}
export const setDate = date => dispatch => {
    return dispatch({
        type: SET_DATE,
        payload: date
    })
}