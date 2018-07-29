import { OPTION_CHANGE, NEW_OPTION_CREATE, NEW_OPTION_CREATE_SUCCESS, NEW_OPTION_CREATE_FAILURE } from "../types/selectActionTypes";
import { resolve } from "path";

export const optionChange = value => dispatch => {
    console.log(value)
    return dispatch({
        type: OPTION_CHANGE,
        payload: value
    })
}
export const newOptionCreate = (inputValue) => dispatch => {
    console.log('new option create', inputValue)
    return new Promise((resolve, reject) => {
        dispatch({
            type: NEW_OPTION_CREATE
        })
        resolve()
    }).then((resolve) => {
        setTimeout(() => {
            return dispatch({
                type: NEW_OPTION_CREATE_SUCCESS,
                payload: inputValue
            })
        }, 2000)
    })

}