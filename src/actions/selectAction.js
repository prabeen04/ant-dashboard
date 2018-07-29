import { OPTION_CHANGE, NEW_OPTION_CREATE } from "../types/selectActionTypes";

export const optionChange = value => dispatch => {
    console.log(value)
    return dispatch({
        type: OPTION_CHANGE,
        payload: value
    })
}