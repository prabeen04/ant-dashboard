import { GET_JUMPSTART_LIST, SET_JUMPSTART_LIST, OPEN_JUMPSTART_MODAL, CLOSE_JUMPSTART_MODAL } from '../types/dashboardActionTypes';
export const getJumpstartList = () => dispatch => {
    return dispatch({
        type: GET_JUMPSTART_LIST
    })
}
export const setJumpstartList = (data) => dispatch => {
    console.log(data)
    return dispatch({
        type: SET_JUMPSTART_LIST,
        payload: data

    })
}
export const openJumpstartModal = (id) => dispatch => {
    return dispatch({
        type: OPEN_JUMPSTART_MODAL,
        payload: id

    })
}
export const closeJumpstartModal = (id) => dispatch => {
    return dispatch({
        type: CLOSE_JUMPSTART_MODAL,
        payload: id

    })
}