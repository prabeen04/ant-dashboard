import { OPTION_CHANGE, NEW_OPTION_CREATE, NEW_OPTION_CREATE_SUCCESS, NEW_OPTION_CREATE_FAILURE, 
    OPEN_FORM_MODAL, CLOSE_FORM_MODAL } from "../types/selectActionTypes";
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
    console.log(inputValue)
    return dispatch({
        type: NEW_OPTION_CREATE
    })
}
export const openFormModal = (inputValue) => dispatch => {
    console.log(inputValue)
    // const newOption = createOption(inputValue);
    return dispatch({
        type: OPEN_FORM_MODAL,
        payload: inputValue
    })
}
export const closeFormModal = () => dispatch => {
    return dispatch({
        type: CLOSE_FORM_MODAL
    })
}