import { GET_JUMPSTART_LIST, SET_JUMPSTART_LIST, OPEN_JUMPSTART_MODAL, CLOSE_JUMPSTART_MODAL, SORT_JUMPSTART_BOX } from '../types/dashboardActionTypes';
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

export const sortJumpstartBox = (dragIndex, hoverIndex) => dispatch => {
    console.log(dragIndex, hoverIndex)
    return dispatch({
        type: SORT_JUMPSTART_BOX,
        payload: dragIndex,
        payload2: hoverIndex,

    })
}