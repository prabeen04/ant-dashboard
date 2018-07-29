import { OPTION_CHANGE, NEW_OPTION_CREATE, NEW_OPTION_CREATE_SUCCESS, NEW_OPTION_CREATE_FAILURE } from "../types/selectActionTypes";

export const optionChange = value => dispatch => {
    console.log(value)
    return dispatch({
        type: OPTION_CHANGE,
        payload: value
    })
}