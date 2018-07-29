import { OPTION_CHANGE, NEW_OPTION_CREATE, NEW_OPTION_CREATE_SUCCESS, NEW_OPTION_CREATE_FAILURE, OPEN_FORM_MODAL } from "../types/selectActionTypes";
// import { resolve } from "path";

export const optionChange = value => dispatch => {
    console.log(value)
    return dispatch({
        type: OPTION_CHANGE,
        payload: value
    })
}
const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
  });

export const newOptionCreate = (inputValue) => dispatch => {
    console.log('new option create', inputValue)
    return new Promise((resolve, reject) => {
        dispatch({
            type: NEW_OPTION_CREATE
        })
        resolve()
    }).then((resolve) => {
        setTimeout(() => {
            const newOption = createOption(inputValue);
            console.log(inputValue)
            return dispatch({
                type: NEW_OPTION_CREATE_SUCCESS,
                payload: newOption
            })
        }, 2000)
    })

}