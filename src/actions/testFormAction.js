import { SET_SELECT_VALUE } from '../types/testFormActionTypes';
export const setSelectValue = value => dispatch => {
    return dispatch({
        type: SET_SELECT_VALUE,
        payload: value
    })
}